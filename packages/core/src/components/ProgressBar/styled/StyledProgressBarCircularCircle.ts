import { GlobalAriaProps, GlobalAttrProps } from '../../../declarations';
import styled, { css } from 'styled-components';

import { getCxy, getStroke, getRadio, getTrackBgColor } from '../utils';
import { BaseStyledProgressBarProps } from './declarations';

export interface StyledProgressBarCircularProps
  extends GlobalAttrProps,
    GlobalAriaProps,
    Pick<BaseStyledProgressBarProps, 'colorScheme' | 'progress' | 'size'> {}

export const StyledProgressBarCircular = styled.circle.attrs(
  ({ size }: StyledProgressBarCircularProps) => ({
    // width, height, stroke-width and r depends on prop 'size' ------------------
    cx: getCxy(size),
    cy: getCxy(size),
    strokeWidth: getStroke(size),
    r: getRadio(size),
    fill: 'none',
  })
)<StyledProgressBarCircularProps>`
  ${({ colorScheme, progress, theme }) => {
    const progressBarTokens = theme.cmp.progressBar;

    return css`
      stroke: ${getTrackBgColor({
        colorScheme,
        progress,
        tokens: progressBarTokens,
      })};
    `;
  }}
`;
