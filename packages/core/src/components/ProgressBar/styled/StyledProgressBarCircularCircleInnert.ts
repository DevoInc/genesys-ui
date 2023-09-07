import styled, { css, keyframes } from 'styled-components';

import { BaseProgressBarProps } from '../declarations';

import {
  getProgressBgColor,
  getCxy,
  getStroke,
  getRadio,
  getRadiant,
} from '../utils';

const sizeStroke = keyframes`
  0% {
    stroke-dashoffset: 300;
    opacity: .5;
  }
  50% {
    stroke-dashoffset: 200;
    opacity: 1;
  }
  100% {
    stroke-dashoffset: 300;
    opacity: .3;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledProgressBarCircularCircleInnerProps
  extends Pick<
    BaseProgressBarProps,
    'indeterminate' | 'percent' | 'status' | 'size'
  > {}

export const StyledProgressBarCircularCircleInner = styled.circle.attrs(
  ({ size }: StyledProgressBarCircularCircleInnerProps) => ({
    // width, height, stroke-width and r depends on prop 'size' ------------------
    cx: getCxy(size),
    cy: getCxy(size),
    strokeWidth: getStroke(size),
    r: getRadio(size),
    rad: getRadiant(size),
    fill: 'none',
  }),
)<StyledProgressBarCircularCircleInnerProps>`
  ${({ indeterminate, status, percent, rad, theme }) => {
    const progressBarTokens = theme.cmp.progressBar;

    return css`
      transition: stroke-dashoffset ease 0.3s;
      stroke: ${getProgressBgColor({
        status,
        tokens: progressBarTokens,
      })};
      stroke-dasharray: ${rad};
      stroke-linecap: round;

      ${!indeterminate &&
      css`
        stroke-dashoffset: ${rad * ((100 - percent) / 100)};
      `};

      ${indeterminate &&
      (!status || status === 'progressing') &&
      css`
        animation: ${sizeStroke} ease 1s infinite;
        transform: translate3d(0, 0, 0);
      `};

      ${indeterminate &&
      status !== 'progressing' &&
      css`
        stroke-dashoffset: 0;
      `};
    `;
  }};
`;
