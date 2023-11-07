import styled, { css, keyframes } from 'styled-components';

import { BaseProgressBarProps } from '../declarations';

const rotationInfinite = keyframes`
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
`;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledProgressBarCircularSVGProps
  extends Pick<
    BaseProgressBarProps,
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
