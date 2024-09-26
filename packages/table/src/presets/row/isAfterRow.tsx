import { TRowPreset } from '../../declarations';

export const isAfterRow: TRowPreset = {
  style: ({ theme, evenOddType }) =>
    `background-color: ${theme.cmp.table.row.color.background[evenOddType].afterRow}; z-index: ${theme.cmp.table.row.elevation.zIndex.isAfterRow};`,
  id: 'isAfterRow',
};
