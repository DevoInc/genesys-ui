import { css, DefaultTheme } from 'styled-components';

import {
  truncateTypoMixin,
  typoMixin,
} from '../../../styled/mixins/typography';
import { disabledMixin } from '../../../styled/mixins/state';
import { getLinkColor } from './linkColor';
import { ILink } from '../declarations';

export interface ILinkMixin {
  /** This property defines the color scheme for the Link. */
  $colorScheme?: ILink['colorScheme'];
  /** If the Link is underlined to make it more prominent. */
  $underlined?: boolean;
  /** If the Link fits the full available width of its parent. Makes it behavior as a block.*/
  $wide?: boolean;
  /** Size of the component. */
  $size?: ILink['size'];
  /** Interaction state of the component. */
  $state?: ILink['state'];
  /** This property as boolean defines if the Link is shown in one line with
   * ellipsis or, as a number, it defines the number of lines before
   * ellipsis (css line-clamp). */
  $lineClamp?: number;
  theme: DefaultTheme;
  linkTokens: DefaultTheme['cmp']['link'];
}

export const linkMixin = ({
  $colorScheme = 'base',
  $underlined,
  $wide,
  $size = 'md',
  $state = 'enabled',
  theme,
  linkTokens,
  $lineClamp,
}: ILinkMixin) => {
  const getLinkColorByState = getLinkColor({
    $colorScheme,
    themeScheme: theme.meta.scheme,
    colorTokens: linkTokens.color.text,
  });
  const linkBoxShadowToken = linkTokens.elevation.boxShadow.focused;

  return css`
    position: relative;
    transition: ${linkTokens.mutation.transition};
    color: ${getLinkColorByState()};
    text-decoration: ${$underlined ? 'underline' : 'none'};
    cursor: pointer;
    outline: none;

    // text styles
    ${typoMixin({
      $bold: true,
      $size,
      theme,
      $variant: 'body',
    })}

    // disabled
    ${$state === 'disabled' &&
    css`
      ${disabledMixin(theme)};
    `};

    // wide
    ${$wide &&
    css`
      display: flex;
      width: 100%;
    `};

    // truncate
    ${$lineClamp &&
    css`
      ${truncateTypoMixin({ $lineClamp })}
      display: block;
    `};

    // mouse states
    ${$state !== 'disabled' &&
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

    ${($state === 'hovered' || $state === 'focused' || $state === 'pressed') &&
    css`
      text-decoration: underline;
      // &&& because we want to override mouse events with prop state
      &&& {
        color: ${getLinkColorByState()};
      }
    `};
  `;
};
