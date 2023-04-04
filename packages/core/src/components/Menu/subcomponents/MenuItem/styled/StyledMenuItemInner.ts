import styled, { css } from 'styled-components';
import {
  BasicState,
  ButtonAttrProps,
  ExpandedState,
  FeaturedState,
  LinkAttrProps,
  MouseState,
  SelectedState,
  UIState,
} from '../../../../../declarations';
import {
  btnResetMixin,
  disabledMixin,
  flexMixin,
  pseudoElementOverlayMixin,
  typoMixin,
} from '../../../../../styled/';
import { menuItemBackdropMixin } from '../helpers';
import { menuItemSizeConfig } from '../constants';

export interface StyledMenuItemInnerProps
  extends Pick<ButtonAttrProps, 'tabIndex' | 'value'>,
    LinkAttrProps {
  /** If the menu item has a reserved left space for markers: icon, selection mark... etc. */
  hasExtraLeftSpace?: boolean;
  /** State of the menu item */
  state?:
    | BasicState
    | MouseState
    | FeaturedState
    | SelectedState
    | ExpandedState
    | UIState;
}

export const StyledMenuItemInner = styled.button<StyledMenuItemInnerProps>`
  ${({ hasExtraLeftSpace, state = 'enabled', theme }) => {
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
      ${btnResetMixin};
      ${flexMixin({ dis: 'flex', ai: 'center', jc: 'flex-start' })};
      ${typoMixin({ theme })};
      width: 100%;
      appearance: none;
      position: relative;
      transition: all ease-in-out
        ${aliasTokens.mutation.transitionDuration.action};
      min-height: ${tokens.size.minHeight};
      padding: 0 ${horPadding};
      background-color: ${tokens.color.background[state]};
      color: ${tokens.color.text[state]};
      cursor: pointer;
      text-decoration: none;

      ${hasExtraLeftSpace &&
      css`
        padding-left: calc(${horPadding} + ${iconSize} + ${iconSpace});
      `}

      &,
      &::before {
        border-radius: ${tokens.shape.borderRadius};
      }

      &::before {
        ${pseudoElementOverlayMixin()};
      }

      // styles based pseudo-classes (not disabled)
      ${state !== 'disabled' &&
      css`
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
      `}

      // styles based in states
      ${state === 'disabled' &&
      css`
        ${disabledMixin(theme)};
      `}
      
      ${(state === 'expanded' || state === 'hovered' || state === 'pressed') &&
      css`
        &&& {
          ${menuItemBackdropMixin({ tokens, state })};
        }
      `}

      ${state === 'focused' &&
      css`
        &&& {
          ${focusedStyles};
        }
      `}

        // get the selected and activated styles in uncontrolled way too
      &&&:has(:checked) {
        background-color: ${tokens.color.background.selected};
        color: ${tokens.color.text.selected};
      }
    `;
  }}
`;