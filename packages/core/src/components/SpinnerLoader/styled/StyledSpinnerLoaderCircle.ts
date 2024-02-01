import styled, { css } from 'styled-components';

import { SpinnerColorScheme } from '../constants';

export interface StyledSpinnerLoaderCircleProps {
  colorScheme?: SpinnerColorScheme;
}

export const StyledSpinnerLoaderCircle = styled.circle<StyledSpinnerLoaderCircleProps>`
  ${({ colorScheme, theme }) => {
  const strokeColor = theme.cmp.loader.spinner.color.background[colorScheme];
  return css`
      position: relative;
      stroke-linecap: round;
      stroke: ${strokeColor};
      stroke-linecap: round;
    `;
}}
`;
