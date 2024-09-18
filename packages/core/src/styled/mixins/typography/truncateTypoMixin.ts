import { css } from 'styled-components';
import * as React from 'react';

/**
 * Get typography styles for truncated text
 *
 * @param $maxWidth to start to truncate
 * @param $lineClamp number of lines before ellipsis (css line-clamp)
 * @return typography styles
 */
export const truncateTypoMixin = (
  {
    $maxWidth,
    $lineClamp,
  }: {
    $maxWidth?: React.CSSProperties['maxWidth'];
    $lineClamp?: number;
  } = { $maxWidth: '100%', $lineClamp: 1 },
) => css`
  max-width: ${$maxWidth};
  overflow: hidden;
  ${$lineClamp > 1
    ? css`
        display: -webkit-box;
        -webkit-line-clamp: ${$lineClamp};
        -webkit-box-orient: vertical;
      `
    : css`
        white-space: nowrap;
        word-wrap: normal;
        text-overflow: ellipsis;
      `}
`;
