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
    definitions.map((rowOrCol: TRowDef | TColDef) => {
      const preset = presets.find((element) => element.id === rowOrCol.preset);
      return {
        ...defaultDefinitions,
        ...preset,
        ...rowOrCol,
        context: {
          ...defaultDefinitions?.context,
          ...preset?.context,
          ...rowOrCol?.context,
        },
      };
    });
