import { DefaultTheme } from 'styled-components';

import { GlobalSize } from '../../declarations';

/**
 * Given an icon size as 'md', 'lg', .... this function will transform into a
 * real size using the theme references
 */
export const getIconSize =
  (theme: DefaultTheme) => (size: string | GlobalSize) => {
    const sizeTokens = theme.alias.size.square.icon.base;
    return (size && sizeTokens[size]) || size;
  };
