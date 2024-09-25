import { TPresetRow, TRowDef } from 'packages/table/src/declarations';

export const addPresetToRowDefs = (
  rowDefs: TRowDef[],
  id: string,
  preset: TPresetRow,
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
