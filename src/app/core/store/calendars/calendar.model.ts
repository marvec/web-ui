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

export const DEFAULT_CALENDAR_ID = 'default';
export const CALENDAR_DATE_FORMAT = 'YYYY-MM-DD HH:mm';

export interface CalendarModel {
  id: string;
  config?: CalendarConfig;
}

export interface CalendarConfig {
  date: Date;
  mode: CalendarMode;
  collections: Record<string, CalendarCollectionConfig>;
}

export enum CalendarMode {
  Month = 'month',
  Week = 'week',
  Day = 'day',
}

export interface CalendarCollectionConfig {
  barsProperties?: Record<string, CalendarBarModel>;
}

export interface CalendarBarModel {
  collectionId: string;
  attributeId: string;
}

export type CalendarBarProperty = CalendarBarPropertyRequired | CalendarBarPropertyOptional;

export enum CalendarBarPropertyRequired {
  NAME = 'name',
  START_DATE = 'start',
}

export enum CalendarBarPropertyOptional {
  END_DATE = 'end',
}