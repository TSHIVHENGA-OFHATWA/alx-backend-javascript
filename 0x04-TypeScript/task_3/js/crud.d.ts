/// <reference path="./interface.ts" />

import { RowID, RowElement } from './interface';

declare module 'CRUD' {
    function insertRow(row: RowElement): RowID;
    function updateRow(id: RowID, updatedRow: Partial<RowElement>): void;
    function deleteRow(id: RowID): void;
}
