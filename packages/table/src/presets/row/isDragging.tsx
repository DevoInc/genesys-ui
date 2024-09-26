import { TRowPreset } from '../../declarations';

export const isDragging: TRowPreset = {
  style: ({ theme, striped }) =>
    `background-color: ${theme.cmp.table.row.color.background.odd.base}; ${
      !striped &&
      `
      border-bottom: solid ${theme.cmp.table.row.shape.borderSize.after}
        ${theme.cmp.table.row.color.background.after};
    `
    }; box-shadow: ${theme.alias.elevation.boxShadow.depth.draggable};`,
  id: 'isDragging',
};
