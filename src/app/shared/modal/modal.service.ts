/*
 * Lumeer: Modern Data Definition and Processing Platform
 *
 * Copyright (C) since 2017 Lumeer.io, s.r.o. and/or its affiliates.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {Injectable, TemplateRef} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap';
import {AttributeTypeModalComponent} from './attribute-type/attribute-type-modal.component';
import {AppState} from '../../core/store/app.state';
import {selectServiceLimitsByWorkspace} from '../../core/store/organizations/service-limits/service-limits.state';
import {first, take} from 'rxjs/operators';
import {combineLatest} from 'rxjs';
import {selectCurrentUser} from '../../core/store/users/users.state';
import {selectOrganizationByWorkspace} from '../../core/store/organizations/organizations.state';
import {userHasManageRoleInResource} from '../utils/resource.utils';
import {Organization} from '../../core/store/organizations/organization';
import {NotificationsAction} from '../../core/store/notifications/notifications.action';
import {RouterAction} from '../../core/store/router/router.action';
import {I18n} from '@ngx-translate/i18n-polyfill';
import {AttributeFunctionModalComponent} from './attribute-function/attribute-function-modal.component';
import {selectCollectionById} from '../../core/store/collections/collections.state';
import {selectLinkTypeById} from '../../core/store/link-types/link-types.state';
import {Collection} from '../../core/store/collections/collection';
import {LinkType} from '../../core/store/link-types/link.type';
import {CreateLinkModalComponent} from './create-link/create-link-modal.component';
import {View} from '../../core/store/views/view';
import {ShareViewModalComponent} from './share-view/share-view-modal.component';
import {DocumentDetailModalComponent} from './document-detail/document-detail-modal.component';
import {DocumentModel} from '../../core/store/documents/document.model';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalRefs: BsModalRef[] = [];

  constructor(private store$: Store<AppState>, private i18n: I18n, private bsModalService: BsModalService) {}

  public show(content: string | TemplateRef<any> | any, config?: ModalOptions): BsModalRef {
    const modalRef = this.bsModalService.show(content, config);
    this.modalRefs.push(modalRef);
    return modalRef;
  }

  public showDocumentDetail(document: DocumentModel, collection: Collection): BsModalRef {
    const config = {
      initialState: {document: document, collection: collection},
      keyboard: true,
      class: 'modal-lg',
    };
    const modalRef = this.bsModalService.show(DocumentDetailModalComponent, config);
    this.modalRefs.push(modalRef);
    return modalRef;
  }

  public showShareView(view: View): BsModalRef {
    const initialState = {view};
    const config = {initialState, keyboard: false, class: 'modal-lg'};
    config['backdrop'] = 'static';
    const modalRef = this.bsModalService.show(ShareViewModalComponent, config);
    this.modalRefs.push(modalRef);
    return modalRef;
  }

  public showCreateLink(collections: Collection[], callback?: (linkType: LinkType) => void): BsModalRef {
    const initialState = {collections, callback};
    const config = {initialState, keyboard: false};
    config['backdrop'] = 'static';
    const modalRef = this.bsModalService.show(CreateLinkModalComponent, config);
    this.modalRefs.push(modalRef);
    return modalRef;
  }

  public showAttributeType(attributeId: string, collectionId: string, linkTypeId?: string): BsModalRef {
    const initialState = {attributeId, collectionId, linkTypeId};
    const config = {initialState, keyboard: false};
    config['backdrop'] = 'static';
    const modalRef = this.bsModalService.show(AttributeTypeModalComponent, config);
    this.modalRefs.push(modalRef);
    return modalRef;
  }

  public showAttributeFunction(attributeId: string, collectionId: string, linkTypeId?: string) {
    const attributesResourceObservable =
      (collectionId && this.store$.pipe(select(selectCollectionById(collectionId)))) ||
      this.store$.pipe(select(selectLinkTypeById(linkTypeId)));

    combineLatest([this.store$.pipe(select(selectServiceLimitsByWorkspace)), attributesResourceObservable])
      .pipe(first())
      .subscribe(([limits, attributesResource]) => {
        const functions = (attributesResource.attributes || []).filter(
          attr => attr.id !== attributeId && !!attr.function && !!attr.function.js
        ).length;
        if (limits && limits.functionsPerCollection !== 0 && functions >= limits.functionsPerCollection) {
          this.notifyFunctionsLimit();
        } else {
          this.showAttributeFunctionDialog(attributeId, collectionId, linkTypeId);
        }
      });
  }

  private showAttributeFunctionDialog(attributeId: string, collectionId: string, linkTypeId: string): BsModalRef {
    const initialState = {attributeId, collectionId, linkTypeId};
    const config = {initialState, keyboard: false, class: 'modal-xxl'};
    config['backdrop'] = 'static';
    const modalRef = this.bsModalService.show(AttributeFunctionModalComponent, config);
    this.modalRefs.push(modalRef);
    return modalRef;
  }

  private notifyFunctionsLimit() {
    combineLatest([
      this.store$.pipe(select(selectCurrentUser)),
      this.store$.pipe(select(selectOrganizationByWorkspace)),
    ])
      .pipe(take(1))
      .subscribe(([currentUser, organization]) => {
        if (userHasManageRoleInResource(currentUser, organization)) {
          this.notifyFunctionsLimitWithRedirect(organization);
        } else {
          this.notifyFunctionsLimitWithoutRights();
        }
      });
  }

  private notifyFunctionsLimitWithRedirect(organization: Organization) {
    const title = this.i18n({id: 'serviceLimits.trial', value: 'Free Service'});
    const message = this.i18n({
      id: 'function.create.serviceLimits',
      value:
        'You can have only a single function per table/link type in the Free Plan. Do you want to upgrade to Business now?',
    });
    this.store$.dispatch(
      new NotificationsAction.Confirm({
        title,
        message,
        action: new RouterAction.Go({
          path: ['/organization', organization.code, 'detail'],
          extras: {fragment: 'orderService'},
        }),
        yesFirst: false,
      })
    );
  }

  private notifyFunctionsLimitWithoutRights() {
    const title = this.i18n({id: 'serviceLimits.trial', value: 'Free Service'});
    const message = this.i18n({
      id: 'function.create.serviceLimits.noRights',
      value: 'You can have only a single function per table/link type in the Free Plan.',
    });
    this.store$.dispatch(new NotificationsAction.Info({title, message}));
  }

  public destroy() {
    this.modalRefs.forEach(ref => ref && ref.hide());
  }
}