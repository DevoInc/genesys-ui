import styled, { css } from 'styled-components';
import { lighten } from 'polished';

// constants
import {
  INPUT_CONTROL_PSEUDO_ACTIONS_SIZE_MAP,
  INPUT_CONTROL_SHOW_PASSWORD_SIZE_MAP,
} from '../constants';

// declarations
import {
  commonInputControlMixin,
  ControlWidth,
  FieldSize,
  FieldStatus,
} from '../../../';

// utils and helpers
import { typoMixin } from '../../../';
import { hasStatus } from '../../../utils/validations';
import { btnResetMixin } from '../../../styled/';

export interface StyledInputControlProps {
  /** If the Input has an addon to its left, so it needs special styles. */
  hasAddonToLeft?: boolean;
  /** If the Input has an addon to its right, so it needs special styles. */
  hasAddonToRight?: boolean;
  /** Whether the component displays an icon. */
  hasIcon?: boolean;
  /** Whether the component displays an icon related with type. */
  hasTypeIcon?: boolean;
  /** Width of the input control based in predefined values as 'xxs', 'xs', 'sm'... etc. or directly in a css value. It should reflect the length of the content you expect the user to enter. */
  inputWidth?: ControlWidth;
  /** Size of the input: height, padding, font-size... etc. */
  $size?: FieldSize;
  /** This property defines the status color schema for the input */
  status?: FieldStatus;
}

export const StyledInputControl = styled.input<StyledInputControlProps>`
  ${({
    disabled,
    hasAddonToLeft,
    hasAddonToRight,
    hasIcon,
    hasTypeIcon,
    inputWidth,
    readOnly,
    $size = 'md',
    status = 'base',
    theme,
    type = 'text',
  }) => {
    const aliasTokens = theme.alias;
    const fieldTokens = aliasTokens.fields;
    const fieldIconTokens = fieldTokens.icon;
    const iconSize = fieldIconTokens.size.square[$size];
    const showPasswordSize =
      theme.cmp.button.size.square[INPUT_CONTROL_SHOW_PASSWORD_SIZE_MAP[$size]];
    const inputBorderRadius = fieldTokens.shape.borderRadius;
    const inputHeight = fieldTokens.size.height[$size];
    const inputHorPadding = fieldTokens.space.padding.hor[$size];
    const inputWithIconPadding =
      hasIcon || hasTypeIcon
        ? css`calc(${iconSize} + ${inputHorPadding} * 2)`
        : '0rem';
    const inputWithShowPasswordPadding =
      type === 'password'
        ? css`calc(${showPasswordSize} + ${inputHorPadding} * 2)`
        : '0rem';
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
      ${commonInputControlMixin({
        disabled,
        inputWidth,
        readOnly,
        $size,
        status,
        theme,
      })};

      padding-right: calc(
        ${inputWithIconPadding} + ${inputWithShowPasswordPadding}
      );

      ${hasTypeIcon &&
      css`
        padding-left: ${inputWithIconPadding};
      `}

      ${type === 'password' &&
      css`
        // only to avoid collision with third part plugins
        background-position: calc(
          100% - ${inputWithShowPasswordPadding}
        ) !important;
      `}

      ${hasAddonToLeft &&
      css`
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        ${!hasStatus(status) &&
        css`
          border-left-width: 0;
        `}
      `}

      ${hasAddonToRight &&
      css`
        z-index: 1;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        ${!hasStatus(status) &&
        css`
          border-right-width: 0;
        `}
      `}
      
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
        position: absolute;
        right: ${inputHorPadding};
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
          background-image: ${fieldTokens.shape.backgroundImage.searchCancel
            .base};
          background-color: ${buttonTokens.color.background.neutral.enabled};

          // Here it's not possible to use the same way based in pseudo-element ::before as in buttons
          &:hover {
            background-color: ${lighten(
              theme.meta.scheme === 'dark' ? 0.1 : 0.03,
              buttonTokens.color.background.neutral.hovered,
            )};

            background-image: ${fieldTokens.shape.backgroundImage.searchCancel
              .hovered};
          }
        }
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
