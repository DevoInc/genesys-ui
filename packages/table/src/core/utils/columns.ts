import { VirtualItem } from '@tanstack/react-virtual';
import type { TColDef, TDefaultColDef, TPreset } from '../../declarations';

export const getColDefByID = (
  colDefs: TColDef[] = [],
  virtualColumn: VirtualItem,
): TColDef =>
  colDefs.find((colDef: TColDef) => colDef.id === virtualColumn?.key);

/**
 * @returns Column defs mixed with default column def
 */
export const getCollatedColumns = (
  defaultColDef: TDefaultColDef,
  column: TColDef,
  presets: TPreset[] = [],
): TColDef => {
  const preset = presets.find((element) => element.id === column.preset);
  return { ...defaultColDef, ...preset, ...column };
};
