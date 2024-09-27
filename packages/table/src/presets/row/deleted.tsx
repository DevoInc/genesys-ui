import { TRowPreset } from "../../declarations";

export const deleted: TRowPreset = {
  style: ({theme, striped}) => `background-color: ${theme.alias.color.background.surface.base.deleted}; ${
      !striped &&
      `
      border-bottom: solid ${theme.cmp.table.row.shape.borderSize.after}
        ${theme.cmp.table.row.color.background.after};
    `
    }`,
  id: 'deleted',
}