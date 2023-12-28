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
