import type {
  TCoreDef,
  TDefaultColDef,
  TDefaultRowDef,
} from '../../declarations';

export const mergePresets =
  (
    definitions: TCoreDef[],
    presets: TCoreDef[],
    defaultDefinitions: TDefaultColDef | TDefaultRowDef,
  ) =>
  () =>
    definitions.map((rowOrCol: TCoreDef) => {
      const preset = presets.find(
        (element) => element.id === rowOrCol.preset,
      ) ?? { context: {} };
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
