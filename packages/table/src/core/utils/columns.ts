import { VirtualItem } from '@tanstack/react-virtual';
import { ColDef, DefaultColDef, Preset } from '../../declarations';

export const getColDefByID = (
  colDefs: ColDef[] = [],
  virtualColumn: VirtualItem,
): ColDef => colDefs.find((colDef: ColDef) => colDef.id === virtualColumn?.key);

/**
 * @returns Column defs mixed with default column def
 */
export const getCollatedColumns = (
  defaultColDef: DefaultColDef,
  column: ColDef,
  presets: Preset[] = [],
): ColDef => {
  const preset = presets.find((element) => element.id === column.preset);
  return { ...defaultColDef, ...preset, ...column };
};

export const getOccupiedWidthInfo = (colDefs: ColDef[]): [number, number] =>
  colDefs.reduce(
    ([percentageRemaining, colsCount], colDef: ColDef) => [
      percentageRemaining - (colDef.cellStyle?.width ?? 0),
      colDef.cellStyle?.width ? ++colsCount : colsCount,
    ],
    [100, 0],
  );

/**
 * For a group of column definitions and a table width, obtains the width that the columns
 *    without width defined by user must have
 * The default width is the remaining divided by the columns without width
 */
export const getDefaultColWidth = (
  colDefs: ColDef[],
  tableWidth: number,
  [percentageToCover, colsWithWidthDefined]: [number, number],
): number => {
  return (
    ((percentageToCover / 100) * tableWidth) /
    (colDefs.length - colsWithWidthDefined)
  );
};

/**
 * Calculates the width for the column specified by its ID in the table
 *    referenced by its ref object
 */
export const getColWidth = (
  colWidth: number,
  tableWidth: number,
  defaultColWidth: number,
) => (colWidth ? tableWidth * (colWidth / 100) : defaultColWidth);
