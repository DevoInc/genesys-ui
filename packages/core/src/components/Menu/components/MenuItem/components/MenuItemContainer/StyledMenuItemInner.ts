import styled, { css } from 'styled-components';

import type { IMenuItem } from '../../declarations';
import {
  btnResetMixin,
  disabledMixin,
  pseudoElementOverlayMixin,
  typoMixin,
} from '../../../../../../styled';
import { menuItemBackdropMixin } from '../../helpers';
import { menuItemSizeConfig } from '../../constants';

export interface StyledMenuItemInnerProps {
  /** If the menu item has a reserved left space for markers: icon, selection mark... etc. */
  $hasExtraLeftSpace?: IMenuItem['hasExtraLeftSpace'];
  /** If it's true, the menu item has no background. */
  $quiet?: IMenuItem['quiet'];
  /** If the menu item has unlimited height, and it's added a vertical padding. */
  $unlimitedHeight?: IMenuItem['unlimitedHeight'];
  /** State of the menu item */
  $state?: IMenuItem['state'];
}

export const StyledMenuItemInner = styled.button<StyledMenuItemInnerProps>`
  ${({
    $hasExtraLeftSpace,
    $quiet,
    $state = 'enabled',
    theme,
    $unlimitedHeight,
  }) => {
    const stateForTokens = $state === 'active' ? 'activated' : $state;
    const tokens = theme.cmp.menu.item;
    const horPadding = menuItemSizeConfig(theme).horPadding;
    const iconSize = menuItemSizeConfig(theme).iconSize;
    const iconSpace = menuItemSizeConfig(theme).iconSpace;
    const focusedStyles = css`
      ${menuItemBackdropMixin({ tokens, state: 'focused' })};
      box-shadow: ${tokens.elevation.boxShadow.focused};
      outline: none;
    `;
    return css`
      ${$state !== 'readonly' &&
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
      transition: all ease-in-out ${tokens.mutation.transitionDuration};
      height: ${$unlimitedHeight ? 'auto' : tokens.size.minHeight};
      padding: ${$unlimitedHeight ? horPadding : `0 ${horPadding}`};
      background-color: ${$quiet
        ? 'transparent'
        : tokens.color.background[stateForTokens]};
      color: #1f282e;
      text-decoration: none;

      ${$hasExtraLeftSpace &&
      css`
        padding-left: calc(${horPadding} + ${iconSize} + ${iconSpace});
      `}

      &,
      &::before {
        border-radius: ${tokens.shape.borderRadius};
      }

      // styles based pseudo-classes (not disabled)

      ${$state !== 'disabled' &&
      $state !== 'readonly' &&
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

        ${($state === 'expanded' ||
          $state === 'hovered' ||
          $state === 'pressed') &&
        css`
          &&& {
            ${menuItemBackdropMixin({ tokens, state: stateForTokens })};
          }
        `}

        ${$state === 'focused' &&
        css`
          &&& {
            ${focusedStyles};
          }
        `}
      `}

      // styles based in states
      ${$state === 'disabled' &&
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
