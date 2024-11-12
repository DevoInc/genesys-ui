import { THeaderCellDef } from '../../declarations';

import { existHeaderCellDef } from './existHeaderCellDef';

export const selectedHeaderCellDef = (
  headerCellDefs: THeaderCellDef[],
  headerCellDef: THeaderCellDef,
) => {
  return existHeaderCellDef(headerCellDefs, headerCellDef)
    ? headerCellDefs.map((headerCell) => {
        if (headerCell.colId === headerCellDef.colId) {
          return { ...headerCell, isSelected: true };
        } else {
          return { ...headerCell, isSelected: false };
        }
      })
    : headerCellDefs
        .map((headerCell) => {
          return { ...headerCell, isSelected: false };
        })
        .concat({ ...headerCellDef, isSelected: true });
};
