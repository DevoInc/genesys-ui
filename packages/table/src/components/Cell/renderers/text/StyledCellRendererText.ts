import styled, { css } from 'styled-components';

import { typoColorMixin, typoMixin } from '@devoinc/genesys-ui';
import { StyledCellRendererTextProps } from './declarations';

export const StyledTableCellRendererText = styled.div<StyledCellRendererTextProps>`
  position: relative;
  flex: '1';
  display: 'flex';

  ${({ size, theme, bold }) => {
    return css`
      // text styles
      ${typoMixin({ variant: 'body', theme, size, bold })};
    `;
  }};

  ${({ theme }) => {
    return css`
      // text color
      ${typoColorMixin({
        variant: 'body',
        theme,
      })};
    `;
  }};
`;
