import styled, { css } from 'styled-components';

import {
  typoMixin,
  btnResetMixin,
  pseudoElementOverlayMixin,
} from '../../../../styled/mixins';
import { loadingAnimationMixin } from '../../helpers';
import type { IButtonContainerStyled } from './declarations';
import { getTokenKeyFromColorScheme } from '../../../../helpers';

export interface StyledButtonContainerProps extends IButtonContainerStyled {}

export const StyledButtonContainer = styled.button<StyledButtonContainerProps>`
  ${({
    $colorScheme = 'neutral',
    $icon,
    $circular = false,
    $hasDropdown = false,
    $squared = false,
    $wide = false,
    $selectionScheme,
    $size,
    $state,
    theme,
  }) => {
    const isIconButtonDropdown = $icon && $squared && $hasDropdown;
    const colorSchemeForTokens = getTokenKeyFromColorScheme($colorScheme);
    const buttonTokens = theme.cmp.button;
    const IconButtonDropdownTokens = theme.cmp.iconButtonDropdown;
    const boxShadowTokens = buttonTokens.elevation.boxShadow;
    const boxShadowFocused = (
      boxShadowTokens[colorSchemeForTokens] || boxShadowTokens.base
    ).focused;
    const bgColorTokens = buttonTokens.color.background[colorSchemeForTokens];
    const backdropColorTokens = buttonTokens.color.backdrop;
    const textColorTokens = buttonTokens.color.text[colorSchemeForTokens];
    const borderRadius = () => {
      if (($circular && $wide) || ($circular && isIconButtonDropdown))
        return buttonTokens.shape.borderRadius.pill;
      if ($circular) return buttonTokens.shape.borderRadius.full;
      return buttonTokens.shape.borderRadius.medium;
    };
    // height, width and min-width depends on there is children or not (icon button) and other props
    const height = buttonTokens.size.height[$size];
    const width = $wide
      ? '100%'
      : isIconButtonDropdown
        ? IconButtonDropdownTokens.size.width[$size]
        : $squared
          ? height
          : 'auto';
    const padding =
      $squared && !$hasDropdown
        ? '0'
        : `0 ${buttonTokens.space.padding[$size]}`;
    const minWidth = !$squared && buttonTokens.size.minWidth[$size];
    const animationTime = buttonTokens.mutation.transitionDuration;
    return css`
      // button styles reset
      ${btnResetMixin};

      position: relative;
      justify-content: center;
      align-items: center;
      flex: ${$wide ? '1 1 100%' : '0 0 auto'};
      display: ${$wide ? 'flex' : 'inline-flex'};
      opacity: ${$state === 'disabled'
        ? '.4'
        : $state === 'loading'
          ? '.8'
          : '1'};
      transition:
        background-color ${animationTime} ease,
        color ${animationTime} ease,
        width ${animationTime} ease;
      box-shadow: ${$state === 'focused' && boxShadowFocused};
      border: none;
      border-radius: ${borderRadius};
      min-width: ${minWidth};
      width: ${width};
      height: ${height};
      padding: ${padding};
      background-color: ${bgColorTokens[$state]};
      cursor: ${$state === 'disabled' || $state === 'loading'
        ? 'not-allowed'
        : 'pointer'};
      ${typoMixin({
        $variant: 'action',
        theme,
        $size,
      })};
      text-decoration: none;
      color: ${textColorTokens[$state]};

      &::before {
        ${pseudoElementOverlayMixin()};
        transition: background-color ${animationTime} ease;
        overflow: hidden;
        background-color: transparent;
        border-radius: ${borderRadius};
      }

      ${($state === 'focused' ||
        $state === 'hovered' ||
        $state === 'pressed') &&
      css`
        &&&::before {
          background-color: ${backdropColorTokens[$state]};
        }
      `}

      // loading styles
      ${$state === 'loading-success' &&
      css`
        ${loadingAnimationMixin({
          tokens: buttonTokens,
          colorScheme: colorSchemeForTokens,
          loadingType: 'success',
        })};
      `}

      ${$state === 'loading-error' &&
      css`
        ${loadingAnimationMixin({
          tokens: buttonTokens,
          colorScheme: colorSchemeForTokens,
          loadingType: 'error',
        })};
      `}

      ${$state !== 'disabled' &&
      $state !== 'loading' &&
      css`
        &:hover,
        &:focus,
        &:active {
          outline: none;
        }

        &:hover::before {
          background-color: ${backdropColorTokens.hovered};
        }

        &:focus,
        &:focus-within {
          &::before {
            background-color: ${backdropColorTokens.focused};
          }
        }

        &:focus-visible {
          box-shadow: ${boxShadowFocused};
          outline: none;
        }

        ${$selectionScheme &&
        css`
          &:focus-within {
            box-shadow: ${boxShadowFocused};
            outline: none;
          }
        `}

        &:active::before {
          background-color: ${backdropColorTokens.pressed};
        }
      `}

      ${$state === 'enabled' &&
      css`
        &:hover {
          background-color: ${bgColorTokens.hovered};
          color: ${textColorTokens.hovered};
        }

        &:focus,
        &:focus-within {
          background-color: ${bgColorTokens.focused};
          color: ${textColorTokens.focused};
        }

        &:active {
          background-color: ${bgColorTokens.pressed};
          color: ${textColorTokens.pressed};
        }
      `}

      // get the selected styles in uncontrolled way too
      ${$state !== 'disabled' &&
      $state !== 'loading' &&
      $state !== 'selected' &&
      css`
        &&&:has(:checked) {
          background-color: ${bgColorTokens.selected};
          color: ${textColorTokens.selected};
        }
      `}
    `;
  }}
`;
