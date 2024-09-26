import type {
  TColDef,
  TColPreset,
  TDefaultColDef,
  TDefaultRowDef,
  TRowDef,
  TRowPreset,
} from '../../declarations';

export const mergePresets =
  (
    definitions: TRowDef[] | TColDef[],
    presets: TRowPreset[] | TColPreset[],
    defaultDefinitions: TDefaultColDef | TDefaultRowDef,
  ) =>
  () =>
    definitions.map((row) => {
      const preset = presets.find((element) => element.id === row.preset);
      return { ...defaultDefinitions, ...preset, ...row };
    });
