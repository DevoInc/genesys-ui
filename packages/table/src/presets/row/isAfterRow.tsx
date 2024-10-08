import { css } from 'styled-components';
import { TRowPreset } from '../../declarations';

export const isAfterRow: TRowPreset = {
  style: ({ theme, evenOddType }) => css`
    background-color: ${theme.cmp.table.row.color.background[evenOddType]
      .afterRow};
  `,
  id: 'isAfterRow',
};
