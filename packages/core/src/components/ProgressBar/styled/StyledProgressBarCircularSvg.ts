import { GlobalAriaProps, GlobalAttrProps } from '../../../declarations';
import styled, { css, keyframes } from 'styled-components';

import { SQUARE } from '../declarations';
import { BaseStyledProgressBarProps } from './declarations';

const rotationInfinite = keyframes`
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
`;

export interface StyledProgressBarCircularSVGProps
  extends GlobalAttrProps,
    GlobalAriaProps,
    Pick<
      BaseStyledProgressBarProps,
      'indeterminate' | 'percent' | 'progress' | 'size' | 'showInfo'
    > {}

export const StyledProgressBarCircularSVG = styled.svg.attrs(
  ({ percent, showInfo, size }: StyledProgressBarCircularSVGProps) => ({
    // width and height depends on prop 'size'
    width: SQUARE[size],
    height: SQUARE[size],
    'data-tip': !showInfo ? percent + '%' : null,
  })
)<StyledProgressBarCircularSVGProps>`
  ${({ indeterminate, progress }) => css`
    ${!indeterminate &&
    css`
      transform: rotate(-90deg);
    `};

    ${indeterminate &&
    (!progress || progress === 'progressing') &&
    css`
      animation: ${rotationInfinite} linear 0.6s infinite;
    `};
  `}
`;
