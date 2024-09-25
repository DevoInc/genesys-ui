import { TPresetRow, TRowDef } from 'packages/table/src/declarations';
import { getRowDef } from './getRowDef';

export const addPresetToRowDefs = (
  rowDefs: TRowDef[],
  id: string,
  preset: TPresetRow,
) => {
  let newRowDef = [...rowDefs];
  if (getRowDef(rowDefs, id)) {
    newRowDef = newRowDef.map((row) => {
      if (row.id === id) {
        return { ...row, preset };
      }
      return row;
    });
  } else {
    newRowDef?.push({
      id,
      preset
    });
  }
  return newRowDef;
};
