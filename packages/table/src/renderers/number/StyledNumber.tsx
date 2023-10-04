import styled, { css } from 'styled-components';
import { TypoSize, typoColorMixin, typoMixin } from '@devoinc/genesys-ui';

interface StyledNumberProps {
  size?: TypoSize;
  bold?: boolean;
}

export const StyledNumber = styled.div<StyledNumberProps>`
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
