import type { TColDef, TDefaultColDef, TColPreset } from '../../declarations';

/**
 * @returns Column defs mixed with default column def
 */
export const getCollatedColumns = (
  defaultColDef: TDefaultColDef,
  column: TColDef,
  presets: TColPreset[] = [],
): TColDef => {
  const preset = presets.find((element) => element.id === column.preset);
  return { ...defaultColDef, ...preset, ...column };
};
