import { css } from 'styled-components';
import { TRowPreset } from '../../declarations';

export const disabled: TRowPreset = {
  style: ({ theme, striped }) => css`
    opacity: ${theme.cmp.table.row.shape.opacity.disabled};
    pointer-events: none;
    ${!striped &&
    `
      border-bottom: solid ${theme.cmp.table.row.shape.borderSize.after}
        ${theme.cmp.table.row.color.background.after};
    `}
  `,
  id: 'disabled',
};
