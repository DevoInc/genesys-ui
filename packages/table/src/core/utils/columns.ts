import { VirtualItem } from '@tanstack/react-virtual';
import { MutableRefObject } from 'react';
import { ColDef, DefaultColDef, OccupiedWidth } from '../../declarations';
import { ColumnType } from '../../types/declarations';

export const getColDefByID = (
  columnDefs: ColDef[],
  virtualColumn: VirtualItem,
): ColDef =>
  columnDefs.find((colDef: ColDef) => colDef.id === virtualColumn.key);

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

/**
 * For a group of column definitions, obtains the total percentage sum occupied
 *    by the ones with defined width and the number of columns that have a
 *    percentage width defined
 */
const getOccupiedWidthInfo = (colDefs: ColDef[]): OccupiedWidth =>
  colDefs.reduce(
    (sum: OccupiedWidth, colDef: ColDef): OccupiedWidth => ({
      percentage: sum.percentage + (colDef.cellStyle?.width ?? 0),
      definedColDefs: colDef.cellStyle?.width
        ? sum.definedColDefs++
        : sum.definedColDefs,
    }),
    { percentage: 0, definedColDefs: 0 },
  );

/**
 * Calculates the width for the column specified by its ID in the table
 *    referenced by its ref object
 */
export const getEstimatedColumnWidth = (
  colDefs: ColDef[],
  tableMinWidth: number,
  colIndex: number,
  tableRef: MutableRefObject<HTMLDivElement>,
) => {
  const { percentage, definedColDefs } = getOccupiedWidthInfo(colDefs);
  const percentageToCover = (100 - percentage) / 100;
  const tableWidth = Math.max(tableMinWidth, tableRef?.current?.offsetWidth);
  const defaultColWidth =
    (percentageToCover * tableWidth) / (colDefs.length - definedColDefs);
  return colDefs[colIndex]?.cellStyle?.width
    ? tableWidth * (colDefs[colIndex]?.cellStyle?.width / 100)
    : defaultColWidth;
};
