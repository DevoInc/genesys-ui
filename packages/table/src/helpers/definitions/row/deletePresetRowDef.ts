import { TRowDef } from '../../../declarations';

export const deletePresetRowDefs = (rowDefs: TRowDef[], id: string) => {
  return rowDefs?.map((row) => {
    if (row.id === id && row.preset) {
      return { ...row, preset: null };
    }
    return row;
  });
};
