import { css } from 'styled-components';
import { TRowPreset } from '../../declarations';

export const deleted: TRowPreset = {
  style: ({ theme, striped }) => css`
    background-color: ${theme.cmp.table.row.color.background.even.deleted};
    animation: deletedBlink
      ${theme.cmp.table.row.mutation.transitionDuration.modifiedBlink}
      ease-in-out;
    ${!striped &&
    `
      border-bottom: solid ${theme.cmp.table.row.shape.borderSize.after}
        ${theme.cmp.table.row.color.background.after};
    `}
  `,
  id: 'deleted',
};
