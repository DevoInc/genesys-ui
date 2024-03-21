import styled, { css } from 'styled-components';
import {
  TActiveState,
  TBasicState,
  IButtonAttrs,
  TExpandedState,
  TFeaturedState,
  ILinkAttrs,
  TMouseState,
  TReadonlyState,
  TSelectedState,
  TUIState,
} from '../../../../../declarations';
import {
  btnResetMixin,
  disabledMixin,
  pseudoElementOverlayMixin,
  typoMixin,
} from '../../../../../styled/';
import { menuItemBackdropMixin } from '../helpers';
import { menuItemSizeConfig } from '../constants';

export interface StyledMenuItemInnerProps
  extends Pick<IButtonAttrs, 'tabIndex' | 'value'>,
    ILinkAttrs {
  /** If the menu item has a reserved left space for markers: icon, selection mark... etc. */
  hasExtraLeftSpace?: boolean;
  /** If the menu item has unlimited height, and it's added a vertical padding. */
  unlimitedHeight?: boolean;
  /** State of the menu item */
  state?:
    | TBasicState
    | TActiveState
    | TMouseState
    | TFeaturedState
    | TReadonlyState
    | TSelectedState
    | TExpandedState
    | TUIState;
}

export const StyledMenuItemInner = styled.button<StyledMenuItemInnerProps>`
  ${({ hasExtraLeftSpace, state = 'enabled', theme, unlimitedHeight }) => {
    const stateForTokens = state === 'active' ? 'activated' : state;
    const aliasTokens = theme.alias;
    const tokens = aliasTokens.menus.item;
    const horPadding = menuItemSizeConfig(theme).horPadding;
    const iconSize = menuItemSizeConfig(theme).iconSize;
    const iconSpace = menuItemSizeConfig(theme).iconSpace;
    const focusedStyles = css`
      ${menuItemBackdropMixin({ tokens, state: 'focused' })};
      box-shadow: inset ${aliasTokens.elevation.boxShadow.base.focused};
      outline: none;
    `;
    return css`
      ${state !== 'readonly' &&
      css`
        ${btnResetMixin};
      `}
      display: flex;
      align-items: center;
      justify-content: flex-start;
      ${typoMixin({ theme })};
      width: 100%;
      appearance: none;
      position: relative;
      transition: all ease-in-out
        ${aliasTokens.mutation.transitionDuration.action};
      height: ${unlimitedHeight ? 'auto' : tokens.size.minHeight};
      padding: ${unlimitedHeight ? horPadding : `0 ${horPadding}`};
      background-color: ${tokens.color.background[stateForTokens]};
      color: ${tokens.color.text[stateForTokens]};
      text-decoration: none;

      ${hasExtraLeftSpace &&
      css`
        padding-left: calc(${horPadding} + ${iconSize} + ${iconSpace});
      `}

      &,
      &::before {
        border-radius: ${tokens.shape.borderRadius};
      }

      // styles based pseudo-classes (not disabled)

      ${state !== 'disabled' &&
      state !== 'readonly' &&
      css`
        &::before {
          ${pseudoElementOverlayMixin()};
        }

        &:hover {
          ${menuItemBackdropMixin({ tokens, state: 'hovered' })};
        }

        &:active {
          ${menuItemBackdropMixin({ tokens, state: 'pressed' })};
        }

        &:focus-visible,
        &:focus-within {
          ${focusedStyles};
        }

        &:active {
          ${menuItemBackdropMixin({ tokens, state: 'pressed' })};
        }

        ${(state === 'expanded' ||
          state === 'hovered' ||
          state === 'pressed') &&
        css`
          &&& {
            ${menuItemBackdropMixin({ tokens, state: stateForTokens })};
          }
        `}

        ${state === 'focused' &&
        css`
          &&& {
            ${focusedStyles};
          }
        `}
      `}

      // styles based in states
      ${state === 'disabled' &&
      css`
        ${disabledMixin(theme)};
      `}

        // get the selected and activated styles in uncontrolled way too
      &&&:has(:checked) {
        background-color: ${tokens.color.background.selected};
        color: ${tokens.color.text.selected};
      }
    `;
  }}
`;
