import { DefaultTheme } from 'styled-components';
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
