import { css, DefaultTheme } from 'styled-components';

import type { IPartitions } from '../declarations';

export interface partitionsContainerMixinProps
  extends Pick<IPartitions, 'size' | 'hasSeparators'> {
  theme: DefaultTheme;
}

/**
 * Get the height for PartitionsContainer based in alias track design tokens
 *
 * @return The specific height css value
 */
export const getPartitionsHeight = ({
  size,
  theme,
}: partitionsContainerMixinProps) => {
  const trackTokens = theme.alias.size.height.track;
  return size === 'sm'
    ? trackTokens.xs
    : size === 'lg'
      ? `calc(${trackTokens.md} - 0.2rem)`
      : `calc(${trackTokens.sm} - 0.2rem)`;
};

/**
 * Get specific styles for Flex when it's user as PartitionsContainer
 *
 * @return css with the specific styles
 */
export const partitionsContainerMixin = ({
  hasSeparators,
  size,
  theme,
}: partitionsContainerMixinProps) => css`
  gap: ${hasSeparators && `calc(${getPartitionsHeight({ size, theme })} / 2)`};
  border-radius: ${theme.alias.shape.borderRadius.pill};
  height: ${getPartitionsHeight({ size, theme })};
`;
