import { css, DefaultTheme } from 'styled-components';
import { ChipSize } from './declarations';

export const getPadding = ({
  size,
  sortable,
  tokens,
}: {
  size: ChipSize;
  sortable?: boolean;
  tokens: DefaultTheme['cmp']['chip'];
}) => {
  const symmetricPadding = `0 ${tokens.space.padding.hor[size]}`;
  const asymmetricPadding = `${symmetricPadding} 0 2rem`;
  return sortable ? asymmetricPadding : symmetricPadding;
};

/**
 * Get the Chip icon custom styles applied to an Icon component.
 *
 * @return object with the css.
 */
export const chipIconMixin = ({
  size,
  tokens,
}: {
  size: ChipSize;
  tokens: DefaultTheme['cmp']['chip']['icon'];
}) => {
  return css`
    position: relative;
    font-size: ${tokens.typo.fontSize[size]};
    margin-left: ${tokens.space.offset[size]};
    margin-right: ${tokens.space.margin[size]};
  `;
};
