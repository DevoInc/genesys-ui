import { css } from 'styled-components';
import { TRowPreset } from '../../declarations';

export const modified: TRowPreset = {
  style: ({ theme, evenOddType, striped }) => css`
    background-color: ${theme.cmp.table.row.color.background[evenOddType]
      .highlighted};
    animation: modifiedBlink
      ${theme.cmp.table.row.mutation.transitionDuration.modifiedBlink}
      ease-in-out;
    ${!striped &&
    `
      border-bottom: solid ${theme.cmp.table.row.shape.borderSize.after}
        ${theme.cmp.table.row.color.background.after};
    `}
  `,
  id: 'modified',
};
