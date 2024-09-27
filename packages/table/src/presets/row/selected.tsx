import { css } from 'styled-components';
import { TRowPreset } from '../../declarations';

export const selected: TRowPreset = {
  style: ({ theme, evenOddType, striped }) => css`
    background-color: ${theme.cmp.table.row.color.background[evenOddType]
      .selected};
    ${!striped &&
    `
      border-bottom: solid ${theme.cmp.table.row.shape.borderSize.after}
        ${theme.cmp.table.row.color.background.after};
    `}
  `,
  id: 'selected',
};
