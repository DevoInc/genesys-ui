import { css, DefaultTheme } from 'styled-components';

import { TABS_ITEM_CLOSABLE_BUTTON_SIZE } from './constants';
import type { ITabs, TTabsItemState, TTabsSize } from '../../../declarations';
import { typoMixin } from '../../../../../styled';

export const getTabsItemClosableButtonSquare = (theme: DefaultTheme) =>
  theme.cmp.button.size.square[TABS_ITEM_CLOSABLE_BUTTON_SIZE];

export interface ITabsLinkMixin extends Pick<ITabs, 'align'> {
  /** If the Tab item link has a closable button as sibling, so it needs specific styles. */
  closable?: boolean;
  /** The size of the component: font-size, height... etc. */
  size?: TTabsSize;
  /** The state of the component: enabled, disabled... etc. */
  state?: TTabsItemState;
  /** The common theme object with all the tokens. */
  theme: DefaultTheme;
}

/**
 * Get the custom link styles when it's used as a Tab inner.
 *
 * @param props The object param
 * @param props.align The align of the element
 * @param props.size The size of the element
 * @param props.state The state of the component: enabled, disabled... etc.
 * @param props.theme The common theme object with all the tokens
 * @return object with the CSS.
 */
export const tabsLinkMixin = ({
  align = 'middle',
  closable = false,
  size = 'md',
  state = 'enabled',
  theme,
}: ITabsLinkMixin) => {
  const tokens = theme.cmp.tabs.item;
  const borderRadius = tokens.shape.borderRadius;
  const paddingHor = tokens.space.padding;
  const closableButtonSquare = getTabsItemClosableButtonSquare(theme);
  const spaceToClosableButton = theme.cmp.tabs.item.space.margin.iconToText;
  return css`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: ${tokens.size.height[size]};
    padding: ${closable
      ? `0 calc(${closableButtonSquare} + ${spaceToClosableButton} + ${paddingHor}) 0 ${paddingHor}`
      : `0 ${paddingHor}`};
    border-radius: ${align === 'bottom'
      ? `${borderRadius} ${borderRadius} 0 0`
      : align === 'top'
        ? `0 0 ${borderRadius} ${borderRadius}`
        : `${borderRadius}`};
    white-space: nowrap;
    color: ${tokens.color.text[state]};
    ${typoMixin({ theme, $size: size })};

    &:hover,
    &:focus,
    &:active,
    *:hover > & {
      color: ${state !== 'disabled' && tokens.color.text.hovered};
      text-decoration: none;
    }

    &:hover,
    *:hover > & {
      background-color: ${state !== 'disabled' &&
      tokens.color.background.hover};
    }
  `;
};

/**
 * Get the custom styles for IconButtonRemove when it's used as a TabsItemClose.
 *
 * @return object with the CSS.
 */
export const tabsClosableButtonMixin = ({
  align,
  state,
  theme,
}: {
  align: ITabsLinkMixin['align'];
  state: ITabsLinkMixin['state'];
  theme: DefaultTheme;
}) => {
  return css`
    position: absolute;
    background-color: ${state !== 'selected' && 'transparent'};
    right: ${theme.cmp.tabs.item.space.padding};
    bottom: ${align === 'bottom' &&
    `calc(${theme.cmp.tabs.item.space.padding} / 2)`};
    top: ${align === 'top' && `calc(${theme.cmp.tabs.item.space.padding} / 2)`};
  `;
};
