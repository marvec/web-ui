/*
 * Lumeer: Modern Data Definition and Processing Platform
 *
 * Copyright (C) since 2017 Answer Institute, s.r.o. and/or its affiliates.
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

import {Resource} from '../../model/resource';
import {Constraint} from './../../model/data/constraint';
import {Rule} from '../../model/rule';

export interface Attribute {
  id?: string;
  name: string;

  constraint?: Constraint;
  function?: AttributeFunction;

  usageCount?: number;
  intermediate?: boolean;

  correlationId?: string;
}

export interface AttributeFunction {
  js?: string;
  xml?: string;
  errorReport?: string;
  timestamp?: number;
  editable?: boolean;
}

export interface Collection extends Resource {
  attributes?: Attribute[];
  defaultAttributeId?: string;
  lastTimeUsed?: Date;

  documentsCount?: number;

  favorite?: boolean;

  rules?: Rule[];
}

export interface ImportedCollection {
  collection: Collection;
  data: string;
}
