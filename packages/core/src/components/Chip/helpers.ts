import { DefaultTheme } from 'styled-components';
import type { TChipSize } from './declarations';

export const getPadding = ({
  $size,
  $sortable,
  tokens,
}: {
  $size: TChipSize;
  $sortable?: boolean;
  tokens: DefaultTheme['cmp']['chip'];
}) => {
  const symmetricPadding = `0 ${tokens.space.padding.hor[$size]}`;
  const asymmetricPadding = `${symmetricPadding} 0 2rem`;
  return $sortable ? asymmetricPadding : symmetricPadding;
};
