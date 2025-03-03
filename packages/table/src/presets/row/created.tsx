import { css } from 'styled-components';
import { TRowPreset } from '../../declarations';

export const created: TRowPreset = {
  style: ({ theme, striped }) => css`
    background-color: ${theme.cmp.table.row.color.background.even.created};
    ${!striped &&
    `
      border-bottom: solid ${theme.cmp.table.row.shape.borderSize.after}
        ${theme.cmp.table.row.color.background.after};
    `}
  `,
  id: 'created',
};
