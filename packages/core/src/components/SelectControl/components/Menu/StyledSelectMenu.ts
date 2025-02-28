import * as React from 'react';
import styled, { css } from 'styled-components';

import { getFieldControlTypo } from '../../../Field';
import {
  disabledMixin,
  elevationMixin,
  scrollbars,
  truncateTypoMixin,
  typoMixin,
} from '../../../../styled';
import type { TElevation, TFieldSize } from '../../../../declarations';

const FIELD_MENU_LEVEL_ELEVATION_MAP: TElevation[] = [
  'ground',
  'raised',
  'stickyTop',
  'activated',
  'draggable',
  'overlay',
  'popOut',
];

export interface StyledSelectMenuProps {
  $alignOptions: React.CSSProperties['textAlign'];
  $classNamePrefix: string;
  $maxMenuHeight: React.CSSProperties['maxHeight'];
  $menuIsOpen?: boolean;
  $menuLevel?: number;
  $menuQuiet?: boolean;
  $menuRelative?: boolean;
  $multipleSubtle?: boolean;
  $minMenuHeight: React.CSSProperties['minHeight'];
  $maxMenuWidth: React.CSSProperties['maxWidth'];
  $minMenuWidth: React.CSSProperties['minWidth'];
  $size: TFieldSize;
}

export const StyledSelectMenu = styled.div<StyledSelectMenuProps>`
  ${({
    $alignOptions = 'left',
    $classNamePrefix = 'react-select',
    $maxMenuHeight,
    $menuIsOpen,
    $menuLevel = 3,
    $menuQuiet,
    $menuRelative,
    $minMenuHeight = 0,
    $maxMenuWidth,
    $minMenuWidth,
    $multipleSubtle,
    $size = 'sm',
    theme,
  }) => {
    const cmpTokens = theme.cmp.selectControl;
    const menuTokens = cmpTokens.menu;
    const fieldTransitionDuration = cmpTokens.mutation.transitionDuration;

    const wrapperTokens = cmpTokens.menuWrapper;
    const listTokens = cmpTokens.menuList;
    const optionTokens = cmpTokens.menuOption;
    const optionGroupTokens = cmpTokens.menuGroup;
    const optionHeadingTokens = cmpTokens.menuHeading;
    const optionHeight = $multipleSubtle
      ? `calc(${optionTokens.size.minHeight.isMultipleSubtle} - 0.4rem)`
      : optionTokens.size.minHeight.base;
    const optionHorSpacing = cmpTokens.space.padding.hor[$size];
    const elevation =
      FIELD_MENU_LEVEL_ELEVATION_MAP[$menuLevel >= 0 ? $menuLevel : 3];

    return css`
      .${$classNamePrefix} {
        // SELECT__MENU ////////////////////////////////////////////////////////
        &__menu {
          position: ${$menuRelative || $menuQuiet ? 'relative' : 'absolute'};
          top: ${$menuRelative && 'auto'};
          margin-top: ${() => {
            if ($menuQuiet) return menuTokens.space.marginTop.isQuiet;
            if ($menuIsOpen && $menuLevel === 0)
              return menuTokens.space.marginTop.isGroundLevel;
            return menuTokens.space.marginTop.base;
          }};
          margin-bottom: ${$menuQuiet && '0'};
          ${elevationMixin(theme)($menuQuiet ? 'ground' : elevation)};
          min-width: ${$minMenuWidth};
          max-width: ${$maxMenuWidth};
          background: ${menuTokens.color.background.base};
          ${getFieldControlTypo({ theme, $size })};
          cursor: default;

          &-list {
            ${scrollbars({ theme })};
            margin: ${$menuQuiet
              ? `${wrapperTokens.space.margin} 0 0 0`
              : wrapperTokens.space.margin};
            max-height: ${$maxMenuHeight
              ? `${$maxMenuHeight}px`
              : listTokens.size.maxHeight};
            min-height: ${$minMenuHeight && `${$minMenuHeight}px`};
            padding: 0;

            // Override react-select's style to fix issue with scroll bar.
            width: auto !important;
          }
        }

        // SELECT__MENU__OPTIONS ///////////////////////////////////////////////
        &__option {
          ${truncateTypoMixin()};
          position: relative;
          display: flex;
          transition:
            background-color ${fieldTransitionDuration},
            color ${fieldTransitionDuration};
          border-radius: ${optionTokens.shape.borderRadius};
          min-height: ${optionHeight};
          padding: calc(${optionHorSpacing} / 2) ${optionHorSpacing};
          text-align: ${$alignOptions};
          cursor: pointer;

          i {
            display: inline-block;
          }

          &,
          &:hover,
          &:focus,
          &:active,
          &--is-focused,
          &--is-disabled {
            background-color: ${optionTokens.color.background.enabled};
            color: ${optionTokens.color.text.enabled};

            i {
              color: inherit;
            }
          }

          &--is-focused,
          &:hover {
            color: ${optionTokens.color.text.hovered};
            background-color: ${optionTokens.color.backdrop.hovered};
          }

          &--is-selected {
            &,
            &:hover,
            &:focus,
            &:active {
              background-color: ${$multipleSubtle
                ? 'transparent'
                : optionTokens.color.background.activated};
              color: ${optionTokens.color.text.activated};
            }
          }

          &--is-disabled {
            &,
            &:hover,
            &:focus,
            &:active {
              ${disabledMixin(theme)};
              background-color: ${optionTokens.color.background.enabled};
              color: ${optionTokens.color.text.enabled};
            }
          }
        }

        // SELECT__MENU__GROUP /////////////////////////////////////////////////
        &__group {
          padding: 0;

          &-heading {
            ${truncateTypoMixin()};
            ${typoMixin({
              $textAlign: $alignOptions,
              $size: 'md',
              theme,
              $variant: 'overline',
            })};
            position: relative;
            margin-bottom: 0;
            min-height: ${optionHeight};
            padding: 0 ${optionHorSpacing};
            line-height: ${optionHeight};
            color: ${optionHeadingTokens.color.text};
          }
        }
      }
      .${$classNamePrefix}__group
        + .${$classNamePrefix}__group,
        .${$classNamePrefix}__option
        + .${$classNamePrefix}__group,
        .${$classNamePrefix}__group
        + .${$classNamePrefix}__option {
        margin-top: ${optionGroupTokens.space.gap};
      }
    `;
  }};
`;
