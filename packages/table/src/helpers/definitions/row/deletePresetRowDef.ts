import { TRowDef } from 'packages/table/src/declarations';

export const deletePresetRowDefs = (rowDefs: TRowDef[], id: string) => {
  return rowDefs.map((row) => {
    if (row.id === id) {
      return { ...row, preset: null };
    }
    return row;
  });
};
