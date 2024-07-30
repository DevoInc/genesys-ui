import styled, { css, keyframes } from 'styled-components';

import type { IBaseProgressBar } from '../declarations';

const rotationInfinite = keyframes`
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
`;

export interface StyledProgressBarCircularSVGProps
  extends Pick<
    IBaseProgressBar,
    'indeterminate' | 'percent' | 'status' | 'showStatus'
  > {}

export const StyledProgressBarCircularSVG = styled.svg<StyledProgressBarCircularSVGProps>`
  ${({ indeterminate, status }) => css`
    ${!indeterminate &&
    css`
      transform: rotate(-90deg);
    `};

    ${indeterminate &&
    (!status || status === 'progressing') &&
    css`
      animation: ${rotationInfinite} linear 0.6s infinite;
    `};
  `}
`;
