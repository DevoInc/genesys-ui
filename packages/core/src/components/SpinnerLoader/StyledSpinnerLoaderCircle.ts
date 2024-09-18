import styled, { css } from 'styled-components';

import type { TSpinnerColorScheme } from './declarations';

interface StyledSpinnerLoaderCircleProps {
  $colorScheme?: TSpinnerColorScheme;
}

export const StyledSpinnerLoaderCircle = styled.circle<StyledSpinnerLoaderCircleProps>`
  ${({ $colorScheme, theme }) => {
    const strokeColor = theme.cmp.loader.spinner.color.background[$colorScheme];
    return css`
      position: relative;
      stroke-linecap: round;
      stroke: ${strokeColor};
      stroke-linecap: round;
    `;
  }}
`;
