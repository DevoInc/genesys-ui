import { VirtualItem } from '@tanstack/react-virtual';
import { ColDef, DefaultColDef } from '../../declarations';
import { ColumnType } from '../../types/declarations';

export const getHeaderNameByID = (
  columnDefs: ColDef[],
  virtualColumn: VirtualItem,
): string =>
  columnDefs.find((colDef: ColDef) => colDef.id === virtualColumn.key)
    .headerName;

/**
 * @returns Column defs mixed with default column def
 */
export const getCollatedColumns = (
  defaultColumnDef: DefaultColDef,
  columnDefs: ColDef[],
  types: ColumnType[],
): ColDef[] => {
  return columnDefs.map((column) => {
    const type = types.find((element) => element.id === column.type);
    return { ...defaultColumnDef, ...type, ...column };
  });
};
