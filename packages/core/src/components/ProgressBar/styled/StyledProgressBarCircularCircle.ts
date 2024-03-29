import styled, { css } from 'styled-components';

import type { IBaseProgressBar } from '../declarations';

import { getTrackBgColor } from '../utils';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledProgressBarCircularProps
  extends Pick<IBaseProgressBar, 'colorScheme' | 'status' | 'size'> {}

export const StyledProgressBarCircular = styled.circle<StyledProgressBarCircularProps>`
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
