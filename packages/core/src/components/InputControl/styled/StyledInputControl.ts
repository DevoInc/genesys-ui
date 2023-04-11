import * as React from 'react';
import styled, { css } from 'styled-components';

// declarations
import { FieldSize, FieldStatus } from '../../../';
import { INPUT_CONTROL_PSEUDO_ACTIONS_SIZE_MAP } from '../constants';

// utils and helpers
import { disabledMixin, typoMixin } from '../../../';
import { getFieldControlTypo, getFieldState } from '../../Field/helpers';
import { hasStatus } from '../../../utils/validations';
import { btnResetMixin } from '../../../styled/';

export interface StyledInputControlProps {
  /** Fixed block of content at the beginning of the input */
  addonToLeft?: React.ReactNode;
  /** Fixed block of content at the end of the input */
  addonToRight?: React.ReactNode;
  /** Whether the component displays an icon. */
  hasIcon?: boolean;
  /** Whether the component has an icon type. */
  hasTypeIcon?: boolean;
  /** Size of the input: height, padding, font-size... etc. */
  $size?: FieldSize;
  /** This property defines the status color schema for the input */
  status?: FieldStatus;
}

export const StyledInputControl = styled.input<StyledInputControlProps>`
  ${({
    addonToLeft,
    addonToRight,
    disabled = false,
    hasIcon = false,
    hasTypeIcon = false,
    readOnly = false,
    $size = 'md',
    status = 'base',
    theme,
    type = 'text',
  }) => {
    const state = getFieldState({ readOnly });
    const aliasTokens = theme.alias;
    const fieldTokens = theme.alias.fields;
    const fieldIconTokens = fieldTokens.icon;
    const position = fieldTokens.space.padding.hor[$size];
    const fs = fieldIconTokens.size.square[$size];
    const inputBorderRadius = fieldTokens.shape.borderRadius;
    const inputHeight = fieldTokens.size.height[$size];
    const inputHorPadding = fieldTokens.space.padding.hor[$size];
    const inputWithIconPadding = css`calc(${fs} + ${position} * 2)`;
    const buttonTokens = theme.cmp.button;
    const clearSearchButtonSize = buttonTokens.size.square.xxs;
    const pseudoButtonSize =
      buttonTokens.size.square[INPUT_CONTROL_PSEUDO_ACTIONS_SIZE_MAP[$size]];
    const pseudoButtonFontSize =
      buttonTokens.icon.typo.fontSize[
        INPUT_CONTROL_PSEUDO_ACTIONS_SIZE_MAP[$size]
      ];
    const fileButtonHeight = css`calc(${buttonTokens.size.height[$size]} - 0.6rem)`;
    const fileButtonPadding = css`calc(${buttonTokens.space.padding[$size]} - 0.2rem)`;
    const inputFileTopPadding = css`calc((${inputHeight} - ${fileButtonHeight}) / 3)`;
    const inputColorPadding = css`calc(${aliasTokens.space.cmp.xxs} / 2)`;
    const inputRangeTrackHeight = css`calc(${aliasTokens.size.height.track.xs})`;
    const inputRangeHandlerSize = aliasTokens.handlers.size.square.md;

    return css`
      ${getFieldControlTypo({ theme, size: $size })};
      display: flex;
      appearance: none;
      position: relative;
      transition: border ${fieldTokens.mutation.transitionDuration} ease-in-out,
        box-shadow ${fieldTokens.mutation.transitionDuration} ease-in-out;
      outline: none;
      border-width: ${fieldTokens.shape.borderSize.base};
      border-style: solid;
      border-color: ${fieldTokens.color.border[status][state]};
      border-radius: ${inputBorderRadius};
      width: 100%;
      height: ${inputHeight};
      padding: 0 ${inputHorPadding};
      background-color: ${fieldTokens.color.background[status][state]};
      color: ${fieldTokens.color.text[status][state]};

      ${disabled &&
      css`
        ${disabledMixin(theme)};
      `};

      ${hasIcon &&
      css`
        padding-right: ${inputWithIconPadding};
      `};

      ${addonToLeft &&
      css`
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        ${!hasStatus(status) &&
        css`
          border-left-width: 0;
        `}
      `}

      ${addonToRight &&
      css`
        z-index: 1;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        ${!hasStatus(status) &&
        css`
          border-right-width: 0;
        `}
      `}

        ${!disabled &&
      !readOnly &&
      css`
        &:hover {
          border-color: ${fieldTokens.color.border[status].hovered};
          color: ${fieldTokens.color.text[status].hovered};
        }

        &:focus {
          box-shadow: ${fieldTokens.elevation.boxShadow[status].focused};
          border-color: ${fieldTokens.color.border[status].focused};
          color: ${fieldTokens.color.text[status].focused};
        }
      `}

      &::placeholder {
        color: ${fieldTokens.color.text[status].placeholder};
      }

      // type color
      ${type === 'color' &&
      css`
        padding: ${inputColorPadding};

        &::-webkit-color-swatch-wrapper {
          padding: 0;
        }

        &::-webkit-color-swatch {
          border: none;
          border-radius: ${inputBorderRadius};
        }
      `};

      // type date-time and search pseudo elements
      &::-webkit-search-cancel-button,
      &::-webkit-calendar-picker-indicator {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        appearance: none;
        position: relative;
        transition: background-color ease
          ${buttonTokens.mutation.transitionDuration};
        margin: 0;
        border-radius: ${buttonTokens.shape.borderRadius.full};
        height: ${pseudoButtonSize};
        width: ${pseudoButtonSize};
        padding: 0;
        background-repeat: no-repeat;
        background-size: calc(${pseudoButtonFontSize} + 0.2rem);
        background-position: center center;
        cursor: pointer;

        &:hover {
          background-color: ${buttonTokens.color.background.neutral.enabled};
        }
      }

      // type date-time pseudo elements
      &::-webkit-calendar-picker-indicator {
        background-image: ${fieldTokens.shape.backgroundImage.date};
      }

      &[type='time']::-webkit-calendar-picker-indicator {
        background-image: ${fieldTokens.shape.backgroundImage.time};
      }

      // type search
      ${type === 'search' &&
      css`
        &::-webkit-search-cancel-button {
          height: ${clearSearchButtonSize};
          width: ${clearSearchButtonSize};
          background-size: ${buttonTokens.icon.typo.fontSize.xxs};
          background-image: ${fieldTokens.shape.backgroundImage.search};
          background-color: ${buttonTokens.color.background.neutral.enabled};
        }

        ${hasTypeIcon &&
        css`
          padding-left: ${inputWithIconPadding};
        `}
      `};

      // type file
      ${type === 'file' &&
      css`
        padding-top: ${inputFileTopPadding};

        &::-webkit-file-upload-button {
          ${btnResetMixin};
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          ${typoMixin({
            variant: 'action',
            theme,
            size: $size,
          })};
          position: relative;
          left: calc((${inputHorPadding} - ${inputFileTopPadding}) * -1);
          border-radius: ${buttonTokens.shape.borderRadius.medium};
          height: ${fileButtonHeight};
          padding: 0 ${fileButtonPadding};
          background: ${buttonTokens.color.background.neutral.enabled};
          color: ${buttonTokens.color.text.neutral.enabled};
        }
      `};

      // type range
      ${type === 'range' &&
      css`
        align-items: center;
        margin: 0;
        border: none;
        padding: 0;
        background-color: transparent;

        &:focus {
          box-shadow: none;
        }

        &::-webkit-slider-runnable-track {
          border-radius: ${aliasTokens.shape.borderRadius.pill};
          width: 100%;
          height: ${inputRangeTrackHeight};
          background-color: ${aliasTokens.color.background.track[status]};
        }

        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          cursor: pointer;
          position: relative;
          transition: all ease
            ${aliasTokens.handlers.mutation.transitionDuration};
          transform: translate(0, calc(-50% + ${inputRangeTrackHeight} / 2));
          box-shadow: ${aliasTokens.handlers.elevation.boxShadow.enabled};
          border-radius: ${aliasTokens.handlers.shape.borderRadius};
          width: ${inputRangeHandlerSize};
          height: ${inputRangeHandlerSize};
          background-color: ${aliasTokens.handlers.color.background};
        }

        &:focus::-webkit-slider-thumb,
        &:hover::-webkit-slider-thumb {
          box-shadow: ${aliasTokens.handlers.elevation.boxShadow.hovered};
        }
      `};
    `;
  }}
`;
