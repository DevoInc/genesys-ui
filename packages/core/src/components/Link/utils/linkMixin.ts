import { css, DefaultTheme } from 'styled-components';

import {
  truncateTypoMixin,
  typoMixin,
  disabledMixin,
} from '../../../styled/mixins';
import { StyledLinkProps } from '../StyledLink';
import { getLinkColor } from './linkColor';

export const linkMixin = ({
  colorScheme = 'base',
  underlined,
  wide,
  size = 'md',
  state = 'enabled',
  theme,
  linkTokens,
  lineClamp,
}: StyledLinkProps & {
  theme: DefaultTheme;
  linkTokens: DefaultTheme['cmp']['link'];
}) => {
  const getLinkColorByState = (linkState = state) =>
    getLinkColor({
      colorScheme,
      themeScheme: theme.meta.scheme,
      state: linkState,
      colorTokens: linkTokens.color.text,
    });
  const linkBoxShadowToken = linkTokens.elevation.boxShadow.focused;

  return css`
    position: relative;
    transition: ${linkTokens.mutation.transition};
    color: ${getLinkColorByState()};
    text-decoration: ${underlined ? 'underline' : 'none'};
    cursor: pointer;
    outline: none;

    // text styles
    ${typoMixin({
      bold: true,
      size,
      theme,
      variant: 'body',
    })}

    // disabled
    ${state === 'disabled' &&
    css`
      ${disabledMixin(theme)};
    `};

    // wide
    ${wide &&
    css`
      display: flex;
      width: 100%;
    `};

    // truncate
    ${lineClamp &&
    css`
      ${truncateTypoMixin({ lineClamp })}
      display: block;
    `};

    // mouse states
    ${state !== 'disabled' &&
    css`
      &:hover,
      &:active {
        text-decoration: underline;
      }
      &:hover {
        color: ${getLinkColorByState('hovered')};
      }
      &:focus {
        color: ${getLinkColorByState('focused')};
      }
      &:focus-visible {
        box-shadow: ${linkBoxShadowToken};
        outline: none;
      }
      &:active {
        color: ${getLinkColorByState('pressed')};
      }
    `};

    ${(state === 'hovered' || state === 'focused' || state === 'pressed') &&
    css`
      text-decoration: underline;
      // &&& because we want to override mouse events with prop state
      &&& {
        color: ${getLinkColorByState()};
      }
    `};
  `;
};
