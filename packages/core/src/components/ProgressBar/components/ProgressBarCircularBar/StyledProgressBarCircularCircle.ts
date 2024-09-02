import styled, { css } from 'styled-components';

import type { IBaseProgressBar } from '../../declarations';
import { getTrackBgColor } from '../../utils';

export interface StyledProgressBarCircularProps {
  $colorScheme?: IBaseProgressBar['colorScheme'];
  $status?: IBaseProgressBar['status'];
  $size?: IBaseProgressBar['size'];
}

export const StyledProgressBarCircular = styled.circle<StyledProgressBarCircularProps>`
  ${({ $colorScheme, $status, theme }) => {
    const progressBarTokens = theme.cmp.progressBar;
    return css`
      stroke: ${getTrackBgColor({
        $colorScheme,
        $status,
        tokens: progressBarTokens,
      })};
    `;
  }}
`;
