import * as React from 'react';
import styled, { css } from 'styled-components';

import { getFieldControlTypo } from '../../../components/Field/helpers';

import { disabledMixin } from '../../../styled/mixins/utilsMixins';
import { scrollbars } from '../../../styled/mixins/scrollbars';
import {
  truncateTypoMixin,
  typoMixin,
} from '../../../styled/mixins/baseMixins';
import { Elevation, FieldSize } from '../../../declarations';

const FIELD_MENU_LEVEL_ELEVATION_MAP: Elevation[] = [
  'ground',
  'raised',
  'stickyTop',
  'activated',
  'draggable',
  'overlay',
  'popOut',
];

export interface StyledSelectMenuProps {
  alignOptions: React.CSSProperties['textAlign'];
  classNamePrefix: string;
  maxMenuHeight: React.CSSProperties['maxHeight'];
  menuIsOpen?: boolean;
  menuLevel?: number;
  menuQuiet?: boolean;
  menuRelative?: boolean;
  minMenuHeight: React.CSSProperties['minHeight'];
  minMenuWidth: React.CSSProperties['minWidth'];
  size: FieldSize;
}

export const StyledSelectMenu = styled.div.attrs({
  classNamePrefix: 'react-select',
})<StyledSelectMenuProps>`
  ${({
    alignOptions = 'left',
    classNamePrefix = 'react-select',
    maxMenuHeight,
    menuIsOpen,
    menuLevel = 3,
    menuQuiet,
    menuRelative,
    minMenuHeight = 0,
    minMenuWidth,
    size = 'sm',
    theme,
  }) => {
    const aliasTokens = theme.alias;
    const elevationTokens = aliasTokens.elevation;
    const surfaceTokens = aliasTokens.color.background.surface;
    const fieldTokens = aliasTokens.fields;
    const fieldTransitionDuration = fieldTokens.mutation.transitionDuration;

    const menuTokens = aliasTokens.menus;
    const wrapperTokens = menuTokens.wrapper;
    const listTokens = menuTokens.list;
    const optionTokens = menuTokens.item;
    const optionIconTokens = menuTokens.itemIcon;
    const optionGroupTokens = menuTokens.itemGroup;
    const optionHeight = optionTokens.size.minHeight;
    const optionHorSpacing = fieldTokens.space.padding.hor[size];

    return css`
      .${classNamePrefix} {
        // SELECT__MENU ////////////////////////////////////////////////////////
        &__menu {
          position: ${menuRelative || menuQuiet ? 'relative' : 'absolute'};
          z-index: ${elevationTokens.zIndex.depth.activated};
          margin-top: ${() => {
            if (menuQuiet) return menuTokens.space.marginTop.isQuiet;
            if (menuIsOpen && menuLevel === 0)
              return menuTokens.space.marginTop.isGroundLevel;
            return menuTokens.space.marginTop.base;
          }};
          margin-bottom: ${menuQuiet && '0'};
          box-shadow: ${menuQuiet
            ? 'none'
            : elevationTokens.boxShadow.depth?.[
                FIELD_MENU_LEVEL_ELEVATION_MAP[menuLevel >= 0 ? menuLevel : 3]
              ]};
          border-radius: ${aliasTokens.shape.borderRadius.elevated};
          min-width: ${minMenuWidth};
          background: ${surfaceTokens.base.base};
          ${getFieldControlTypo({ theme, size })};
          cursor: default;

          &-list {
            ${scrollbars({ theme })};
            margin: ${wrapperTokens.space.margin};
            max-height: ${maxMenuHeight
              ? `${maxMenuHeight}px`
              : listTokens.size.maxHeight};
            min-height: ${minMenuHeight && `${minMenuHeight}px`};
            padding: 0;
          }
        }

        // SELECT__MENU__OPTIONS ///////////////////////////////////////////////
        &__option {
          ${truncateTypoMixin()};
          position: relative;
          display: block;
          transition: background-color ${fieldTransitionDuration},
            color ${fieldTransitionDuration};
          border-radius: ${optionTokens.shape.borderRadius};
          min-height: ${optionHeight};
          padding: 0 ${optionHorSpacing};
          line-height: ${optionHeight};
          text-align: ${alignOptions};
          cursor: pointer;

          i {
            display: inline-block;
            margin-right: ${optionIconTokens.space.marginRight[size]};
            font-size: ${optionIconTokens.size.square[size]};
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
              background-color: ${optionTokens.color.background.activated};
              color: ${optionTokens.color.text.activated};
            }
          }

          &--is-disabled {
            &,
            &:hover,
            &:focus,
            &:active {
              ${disabledMixin(theme)};
              background-color: ${optionTokens.color.background.activated};
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
              textAlign: alignOptions,
              size: 'md',
              theme,
              variant: 'overline',
            })};
            position: relative;
            margin-bottom: 0;
            min-height: ${optionHeight};
            padding: 0 ${optionHorSpacing};
            line-height: ${optionHeight};
            color: ${aliasTokens.color.text.body.weak};
          }
        }
      }
      .${classNamePrefix}__group
        + .${classNamePrefix}__group,
        .${classNamePrefix}__option
        + .${classNamePrefix}__group,
        .${classNamePrefix}__group
        + .${classNamePrefix}__option {
        margin-top: ${optionGroupTokens.space.marginTop};
      }
    `;
  }};
`;
