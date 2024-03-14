import styled, { css } from 'styled-components';

import { DASH_ANIMATION } from '../constants';
import { TSpinnerColorScheme } from '../declarations';

interface StyledSpinnerLoaderCircleAnimatedProps {
  colorScheme?: TSpinnerColorScheme;
}

export const StyledSpinnerLoaderCircleAnimated = styled.circle<StyledSpinnerLoaderCircleAnimatedProps>`
  ${({ colorScheme, theme }) => {
    const strokeColor =
      theme.cmp.loader.spinnerAnimatedStroke.color.background[colorScheme];
    return css`
      transform-origin: center;
      animation: ${DASH_ANIMATION} 1.5s ease-in-out infinite;
      stroke: ${strokeColor};
      stroke-linecap: round;
    `;
  }}
`;
