import { DefaultTheme } from 'styled-components';

import type { TGlobalSize } from '../../declarations';

/**
 * Given an icon size as 'md', 'lg', .... this function will transform into a
 * real size using the theme references
 */
export const getIconSize =
  (theme: DefaultTheme) => (size: string | TGlobalSize) => {
    const sizeTokens = theme.cmp.icon.size.square;
    return (size && sizeTokens[size]) || size;
  };
