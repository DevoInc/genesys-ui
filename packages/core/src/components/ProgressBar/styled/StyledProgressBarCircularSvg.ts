import styled, { css, keyframes } from 'styled-components';

import { SQUARE } from '../constants';
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
    'indeterminate' | 'percent' | 'status' | 'size' | 'showStatus'
  > {}

export const StyledProgressBarCircularSVG = styled.svg.attrs(
  ({ percent, showStatus, size }: StyledProgressBarCircularSVGProps) => ({
    // width and height depends on prop 'size'
    width: SQUARE[size],
    height: SQUARE[size],
    'data-tip': !showStatus ? percent + '%' : null,
  }),
)<StyledProgressBarCircularSVGProps>`
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
