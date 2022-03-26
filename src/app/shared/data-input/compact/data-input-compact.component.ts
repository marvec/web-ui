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

import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {DataCursor} from '../data-cursor';
import {DataInputConfiguration} from '../data-input-configuration';
import {Constraint, ConstraintType, DataValue} from '@lumeer/data-filters';

@Component({
  selector: 'data-input-compact',
  templateUrl: './data-input-compact.component.html',
  styleUrls: ['./data-input-compact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataInputCompactComponent {
  @Input()
  public constraint: Constraint;

  @Input()
  public dataValue: DataValue;

  @Input()
  public configuration: DataInputConfiguration;

  @Input()
  public cursor: DataCursor;

  @Input()
  public placeholder: string;

  @Output()
  public save = new EventEmitter<DataValue>();

  public readonly constraintType = ConstraintType;
}
