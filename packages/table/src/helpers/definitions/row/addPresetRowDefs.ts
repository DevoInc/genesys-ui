import type { TRowDef } from '../../../declarations';

export const addPresetToRowDefs = (
  rowDefs: TRowDef[],
  id: string,
  preset: string,
) => {
  return rowDefs?.findIndex((row) => row.id === id) !== -1
    ? rowDefs?.map((row) => {
        if (row.id === id) {
          return { ...row, preset };
        }
        return row;
      })
    : [
        ...rowDefs,
        {
          id,
          preset,
        },
      ];
};
