import { css, DefaultTheme } from 'styled-components';

import type { IPartitions } from '../../declarations';

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
}: partitionsContainerMixinProps) => theme.cmp.partitions.size.height[size];

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
  border-radius: ${theme.cmp.partitions.shape.borderRadius};
  height: ${getPartitionsHeight({ size, theme })};
`;
