import { css } from 'styled-components';

/**
 * Get icon font common styles (normally used with pseudo-elements before and
 * after)
 *
 * @param fontFamily - it is the font-family name of the icon font
 */
export const iconFontMixin = (fontFamily = 'gi') =>
  css`
    font-family: ${fontFamily}, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    speak: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  `.join(' ');
