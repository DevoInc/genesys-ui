import styled, { DefaultTheme, css } from 'styled-components';

import { BaseSize, typoColorMixin, typoMixin } from '@devoinc/genesys-ui';

export type cellSize = BaseSize;

interface StyledTextProps {
  size?: cellSize;
  theme?: DefaultTheme;
  heightProp?: number;
  textAlign?: 'left' | 'center' | 'right';
  density?: 'default' | 'compact' | 'comfortable';
  bold?: boolean;
}

export const StyledText = styled.div<StyledTextProps>`
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
