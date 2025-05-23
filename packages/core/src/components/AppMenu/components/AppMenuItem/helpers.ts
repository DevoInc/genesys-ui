import { css, DefaultTheme } from 'styled-components';
import type { TAppMenuCollapsed, TAppMenuState } from '../../declarations';
import { typoMixin } from '../../../../styled';

/**
 * Get the styles for the AppMenuItem to be applied to a MenuItem component
 *
 * @param props The object param
 * @param props.theme The object with all the design tokens
 * @param props.collapsed If the App menu is collapsed
 * @param props.state App menu item state: enabled, disabled, expanded... etc.
 * @return object with the CSS.
 */
export const appMenuItemMixin = ({
  collapsed,
  state,
  theme,
}: {
  collapsed: TAppMenuCollapsed;
  state: TAppMenuState;
  theme: DefaultTheme;
}) => {
  const tokens = theme.cmp.appMenu.item;
  return css`
    ${typoMixin({ $size: 'lg', theme })};
    left: ${tokens.space.offset.left};
    width: calc(100% - ${tokens.space.offset.left} * 2);
    font-weight: ${tokens.typo.fontWeight[
      state === 'active' ? 'active' : 'enabled'
    ]};
    background-color: ${tokens.color.background.base};
    color: ${tokens.color.text.base};
    padding-left: ${tokens.space.paddingLeft[collapsed ? 'collapsed' : 'base']};
    padding-right: ${tokens.space.paddingRight[
      collapsed ? 'collapsed' : 'base'
    ]};
    transition: padding ${tokens.mutation.transitionDuration.padding} ease;

    &:hover,
    &:focus,
    &:active {
      background-color: ${tokens.color.background.hovered};
      color: ${tokens.color.text.hovered};

      &::before {
        background-color: ${tokens.color.backdrop.hovered};
      }
    }

    &:focus,
    &:has(:focus),
    &:has(:checked) {
      box-shadow: none;
    }

    ${state === 'active' &&
    css`
      &,
      &:hover,
      &:focus,
      &:active {
        background-color: ${tokens.color.background.active};
        color: ${tokens.color.text.active};
      }
    `}

    ${state === 'expanded' &&
    css`
      color: ${tokens.color.text.active};

      &::before {
        background-color: ${tokens.color.backdrop.active};
      }
    `}
  `;
};

/**
 * Get the styles for the AppMenuItem label to be applied to a HFlex component
 *
 * @param props The object param
 * @param props.theme The object with all the design tokens
 * @param props.collapsed If the App menu is collapsed
 * @return object with the CSS.
 */
export const appMenuItemLabelMixin = ({
  collapsed,
  theme,
}: {
  collapsed: TAppMenuCollapsed;
  theme: DefaultTheme;
}) => {
  const tokens = theme.cmp.appMenu.item;

  return css`
    position: relative;
    opacity: ${collapsed ? '0' : '1'};
    transition:
      width ${tokens.mutation.transitionDuration.width} ease-out,
      margin-left ${tokens.mutation.transitionDuration.left} ease-out,
      opacity ${tokens.mutation.transitionDuration.opacity} ease;
  `;
};
