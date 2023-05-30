import styled, { css } from 'styled-components';

import { BaseProgressBarProps } from '../declarations';

import { getCxy, getStroke, getRadio, getTrackBgColor } from '../utils';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledProgressBarCircularProps
  extends Pick<BaseProgressBarProps, 'colorScheme' | 'status' | 'size'> {}

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
  ${({ colorScheme, status, theme }) => {
    const progressBarTokens = theme.cmp.progressBar;

    return css`
      stroke: ${getTrackBgColor({
        colorScheme,
        status,
        tokens: progressBarTokens,
      })};
    `;
  }}
`;
