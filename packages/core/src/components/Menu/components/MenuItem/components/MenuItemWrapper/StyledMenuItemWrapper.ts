import styled, { css } from 'styled-components';
import type { IMenuItem } from '../../declarations';
import { menuItemBackdropMixin } from '../../helpers';
import {
  disabledMixin,
  pseudoElementOverlayMixin,
} from '../../../../../../styled';

export interface StyledMenuItemWrapperProps {
  /** If it's true, the menu item has no background. */
  $quiet?: IMenuItem['quiet'];
  /** State of the menu item */
  $state?: IMenuItem['state'];
}

export const StyledMenuItemWrapper = styled.div<StyledMenuItemWrapperProps>`
  display: flex;
  align-items: center;
  position: relative;
  list-style: none;

  ${({ $quiet, $state, theme }) => {
    const tokens = theme.cmp.menu.item;
    const stateForTokens = $state === 'active' ? 'activated' : $state;

    return css`
      background-color: ${$quiet
        ? 'transparent'
        : tokens.color.background[stateForTokens]};
      transition: all ease-in-out ${tokens.mutation.transitionDuration};
      border-radius: ${tokens.shape.borderRadius};

      // styles based pseudo-classes (not disabled)

      ${$state !== 'disabled' &&
      $state !== 'readonly' &&
      css`
        &::before {
          ${pseudoElementOverlayMixin()};
          border-radius: ${tokens.shape.borderRadius};
        }

        &:hover {
          ${menuItemBackdropMixin({ tokens, state: 'hovered' })};
        }

        &:active {
          ${menuItemBackdropMixin({ tokens, state: 'pressed' })};
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
      `}

      // styles based in states
      ${$state === 'disabled' &&
      css`
        ${disabledMixin(theme)};
      `}

      ${$state !== 'selected' &&
      $state !== 'active' &&
      css`
        &:has(:focus),
        &:has(:focus-visible),
        &:has([aria-expanded='true']) {
          background-color: ${tokens.color.backdrop.hovered};
        }
      `}
    `;
  }}
`;
