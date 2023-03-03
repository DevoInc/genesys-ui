import * as React from 'react';
import styled, { css } from 'styled-components';

// declarations
import { FieldSize, FieldStatus } from '../../../';
import { INPUT_CONTROL_PSEUDO_ACTIONS_SIZE_MAP } from '../constants';

// utils and helpers
import { disabledMixin, flexMixin, typoMixin } from '../../../';
import { getFieldControlTypo, getFieldState } from '../../Field/helpers';
import { hasStatus } from '../../../utils/validations';
import { btnResetMixin } from '../../Button/helpers';

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
    const aliasTokens = theme.tokens.alias;
    const fieldTokens = theme.tokens.alias.fields;
    const fieldIconTokens = fieldTokens.icon;
    const position = fieldTokens.space.padding.hor[$size];
    const fs = fieldIconTokens.size.square[$size];
    const inputBorderRadius = fieldTokens.shape.borderRadius;
    const inputHeight = fieldTokens.size.height[$size];
    const inputHorPadding = fieldTokens.space.padding.hor[$size];
    const inputWithIconPadding = css`calc(${fs} + ${position} * 2)`;
    const buttonTokens = theme.tokens.cmp.button;
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
        ${flexMixin({
          dis: 'inline-flex',
          dir: 'row',
          jc: 'center',
          ai: 'center',
        })};
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
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjUuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDMyIDMyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBkPSJNMjYsNWgtMVYyYzAtMC42LTAuNC0xLTEtMXMtMSwwLjQtMSwxdjNIOVYyYzAtMC42LTAuNC0xLTEtMVM3LDEuNCw3LDJ2M0g2QzMuOCw1LDIsNi43LDIsOC45djE3LjNDMiwyOC4zLDMuOCwzMCw2LDMwaDIwCgljMi4yLDAsNC0xLjcsNC0zLjlWOC45QzMwLDYuNywyOC4yLDUsMjYsNXogTTI2LDI4SDZjLTEuMSwwLTItMC44LTItMS45VjEwLjRjMC4xLDAsMC4yLDAuMSwwLjMsMC4xSDI4djE1LjZDMjgsMjcuMiwyNy4xLDI4LDI2LDI4Cgl6Ii8+Cjwvc3ZnPgo=');
      }

      &[type='time']::-webkit-calendar-picker-indicator {
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjUuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDMyIDMyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMzQzQ5NTI7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTYsMS4zQzcuOSwxLjMsMS4zLDcuOSwxLjMsMTZjMCw4LjEsNi42LDE0LjcsMTQuNywxNC43UzMwLjcsMjQuMSwzMC43LDE2UzI0LjEsMS4zLDE2LDEuM3ogTTE2LDI3LjUKCUM5LjYsMjcuNSw0LjUsMjIuNCw0LjUsMTZTOS42LDQuNSwxNiw0LjVTMjcuNSw5LjYsMjcuNSwxNlMyMi40LDI3LjUsMTYsMjcuNXogTTE3LjEsNy43aC0yLjJ2OC44bDUuNCw1LjRsMS42LTEuNmwtNC44LTQuOFY3Ljd6IgoJLz4KPC9zdmc+Cg==');
      }

      // type search
      ${type === 'search' &&
      css`
        &::-webkit-search-cancel-button {
          height: ${clearSearchButtonSize};
          width: ${clearSearchButtonSize};
          background-size: ${buttonTokens.icon.typo.fontSize.xxs};
          background-image: url(data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMjQiIGhlaWdodD0iMTAyNCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+Cjx0aXRsZT48L3RpdGxlPgo8ZyBpZD0iaWNvbW9vbi1pZ25vcmUiPgo8L2c+CjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik04MTkuNSA4NjcuNWMtMTMuMyAwLTI0LTQuNS0zMy43LTE0LjJsLTI3My44LTI3My45LTI3My45IDI3My45Yy05LjcgOS43LTIwLjQgMTQuMi0zMy43IDE0LjJzLTI0LTQuNS0zMy43LTE0LjJjLTE4LjktMTguOS0xOC45LTQ4LjUgMC02Ny40bDI3My44LTI3My45LTI3My44LTI3My44Yy0xOC45LTE4LjktMTguOS00OC41IDAtNjcuNCA5LjItOS4yIDIxLjItMTQuMiAzMy43LTE0LjIgMTIuNiAwIDI0LjUgNS4xIDMzLjcgMTQuMmwyNzMuOSAyNzMuOCAyNzMuOC0yNzMuOGM5LjItOS4yIDIxLjItMTQuMiAzMy43LTE0LjIgMTIuNiAwIDI0LjUgNS4xIDMzLjcgMTQuMiA5LjIgOS4yIDE0LjIgMjEuMiAxNC4yIDMzLjdzLTUuMSAyNC41LTE0LjIgMzMuN2wtMjc2LjUgMjczLjggMjc2LjQgMjczLjhjMTkgMTkgMTkgNDguNiAwLjEgNjcuNS04LjYgOC42LTIxLjkgMTQuMi0zMy43IDE0LjJ6Ij48L3BhdGg+Cjwvc3ZnPgo=);
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
          ${flexMixin({
            dis: 'inline-flex',
            dir: 'row',
            jc: 'center',
            ai: 'center',
          })};
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
