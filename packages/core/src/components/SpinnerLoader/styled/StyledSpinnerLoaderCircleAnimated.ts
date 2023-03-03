import styled, { css } from 'styled-components';

import { DASH_ANIMATION, SpinnerColorScheme } from '../constants';

interface StyledSpinnerLoaderCircleAnimatedProps {
  colorScheme?: SpinnerColorScheme;
}

export const StyledSpinnerLoaderCircleAnimated = styled.circle<StyledSpinnerLoaderCircleAnimatedProps>`
  ${({ colorScheme, theme }) => {
    const strokeColor =
      theme.tokens.cmp.loader.spinnerAnimatedStroke.color.background[
        colorScheme
      ];
    return css`
      transform-origin: center;
      animation: ${DASH_ANIMATION} 1.5s ease-in-out infinite;
      stroke: ${strokeColor};
      stroke-linecap: round;
    `;
  }}
`;
