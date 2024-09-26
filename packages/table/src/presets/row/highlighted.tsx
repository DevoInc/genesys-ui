import { TRowPreset } from '../../declarations';

export const highlighted: TRowPreset = {
  style: ({ theme, evenOddType, striped }) =>
    `background-color: ${theme.cmp.table.row.color.background[evenOddType].highlighted}; ${
      !striped &&
      `
      border-bottom: solid ${theme.cmp.table.row.shape.borderSize.after}
        ${theme.cmp.table.row.color.background.after};
    `
    }`,
  id: 'highlighted',
};
