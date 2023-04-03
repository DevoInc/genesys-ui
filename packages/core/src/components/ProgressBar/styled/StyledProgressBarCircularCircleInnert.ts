import { GlobalAriaProps, GlobalAttrProps } from '../../../declarations';
import styled, { css, keyframes } from 'styled-components';

import {
  getProgressBgColor,
  getCxy,
  getStroke,
  getRadio,
  getRadiant,
} from '../utils';
import { BaseStyledProgressBarProps } from './declarations';

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

export interface StyledProgressBarCircularCircleInnerProps
  extends GlobalAttrProps,
    GlobalAriaProps,
    Pick<
      BaseStyledProgressBarProps,
      'indeterminate' | 'percent' | 'progress' | 'size'
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
  })
)<StyledProgressBarCircularCircleInnerProps>`
  ${({ indeterminate, progress, percent, rad, theme }) => {
    const progressBarTokens = theme.cmp.progressBar;

    return css`
      transition: stroke-dashoffset ease 0.3s;
      stroke: ${getProgressBgColor({
        progress: progress,
        tokens: progressBarTokens,
      })};
      ${!indeterminate &&
      css`
        stroke-dashoffset: ${rad * ((100 - percent) / 100)};
      `};
      ${indeterminate &&
      (!progress || progress === 'progressing') &&
      css`
        animation: ${sizeStroke} ease 1s infinite;
        transform: translate3d(0, 0, 0);
      `};
      ${indeterminate &&
      progress !== 'progressing' &&
      css`
        stroke-dashoffset: 0;
      `};
      stroke-dasharray: ${rad};
      stroke-linecap: round;
    `;
  }};
`;
