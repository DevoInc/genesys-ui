import styled, { css, CSSProp } from 'styled-components';
import { lighten } from 'polished';

import {
  INPUT_CONTROL_PSEUDO_ACTIONS_SIZE_MAP,
  INPUT_CONTROL_SHOW_PASSWORD_SIZE_MAP,
} from '../../constants';
import { typoMixin } from '../../../../styled/mixins/typography';
import { hasStatus } from '../../../../utils/validations';
import {
  btnResetMixin,
  commonInputControlMixin,
} from '../../../../styled/mixins/components';
import { IInputControlInput } from './declarations';
import { ITextBoxAttrs } from '../../../../declarations';

export interface StyledInputControlProps {
  /** If the Input has an addon to its left, so it needs special styles. */
  $hasAddonToLeft?: boolean;
  /** If the Input has an addon to its right, so it needs special styles. */
  $hasAddonToRight?: boolean;
  /** Whether the component displays an icon. */
  $hasIcon?: boolean;
  /** Whether the component displays an icon related with type. */
  $hasTypeIcon?: boolean;
  /** Width of the input control based in predefined values as 'xxs', 'xs',
   * 'sm'... etc. or directly in a css value. It should reflect the length of
   * the content you expect the user to enter. */
  $inputWidth?: IInputControlInput['inputWidth'];
  /** Size of the input: height, padding, font-size... etc. */
  $size?: IInputControlInput['size'];
  /** This property defines the status color schema for the input */
  $status?: IInputControlInput['status'];
  readOnly?: ITextBoxAttrs['readOnly'];
  // TODO: interface only for satisfy the type error with TS and inherit CSSProp
  css?: CSSProp;
}

export const StyledInputControl = styled.input<StyledInputControlProps>`
  ${({
    disabled,
    $hasAddonToLeft,
    $hasAddonToRight,
    $hasIcon,
    $hasTypeIcon,
    $inputWidth,
    readOnly,
    $size = 'md',
    $status = 'base',
    theme,
    type = 'text',
  }) => {
    const cmpTokens = theme.cmp.inputControl;
    const iconSize = cmpTokens.icon.size.square[$size];
    const showPasswordSize =
      theme.cmp.button.size.square[INPUT_CONTROL_SHOW_PASSWORD_SIZE_MAP[$size]];
    const inputBorderRadius = cmpTokens.shape.borderRadius;
    const inputHeight = cmpTokens.size.height[$size];
    const inputHorPadding = cmpTokens.space.padding.hor[$size];
    const inputWithIconPadding =
      $hasIcon || $hasTypeIcon
        ? `calc(${iconSize} + (${inputHorPadding} * 2))`
        : '0rem';
    const inputWithShowPasswordPadding =
      type === 'password'
        ? `calc(${showPasswordSize} + (${inputHorPadding} * 2))`
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
    const inputColorPadding = cmpTokens.space.padding.typeColor;
    const inputRangeTrackHeight = cmpTokens.pseudoRange.size.height.track;
    const inputRangeHandlerSize = cmpTokens.pseudoRange.size.square.thumb;

    return css`
      ${commonInputControlMixin({
        disabled,
        $inputWidth,
        $readOnly: readOnly,
        $size,
        $status,
        theme,
      })};

      ${($hasIcon || type === 'password') &&
      css`
        padding-right: ${type === 'password' && $hasIcon
          ? `calc(${inputWithShowPasswordPadding} + ${inputWithIconPadding})`
          : type === 'password'
            ? inputWithShowPasswordPadding
            : inputWithIconPadding};
      `}

      ${$hasTypeIcon &&
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

      ${$hasAddonToLeft &&
      css`
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        ${!hasStatus($status) &&
        css`
          border-left-width: 0;
        `}
      `}

      ${$hasAddonToRight &&
      css`
        z-index: 1;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        ${!hasStatus($status) &&
        css`
          border-right-width: 0;
        `}
      `}


      // type number
      ${type === 'number' &&
      css`
        color-scheme: ${theme.meta.scheme === 'dark' && theme.meta.scheme};
      `};

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
        background-image: ${cmpTokens.pseudoCalendar.shape.backgroundImage
          .picker};
      }

      &[type='time']::-webkit-calendar-picker-indicator {
        background-image: ${cmpTokens.pseudoCalendar.shape.backgroundImage
          .timePicker};
      }

      // type search
      ${type === 'search' &&
      css`
        &::-webkit-search-cancel-button {
          height: ${clearSearchButtonSize};
          width: ${clearSearchButtonSize};
          background-size: ${buttonTokens.icon.typo.fontSize.xxs};
          background-image: ${cmpTokens.pseudoSearch.shape.backgroundImage
            .enabled};
          background-color: ${buttonTokens.color.background.neutral.enabled};

          // Here it's not possible to use the same way based in pseudo-element ::before as in buttons
          &:hover {
            background-color: ${lighten(
              theme.meta.scheme === 'dark' ? 0.1 : 0.03,
              buttonTokens.color.background.neutral.hovered,
            )};

            background-image: ${cmpTokens.pseudoSearch.shape.backgroundImage
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
            $variant: 'action',
            theme,
            $size,
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
          border-radius: ${cmpTokens.pseudoRange.shape.borderRadius.track.base};
          width: 100%;
          height: ${inputRangeTrackHeight};
          background-color: ${cmpTokens.pseudoRange.color.background.track[
            $status
          ]};
        }

        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          cursor: pointer;
          position: relative;
          transition: all ease
            ${cmpTokens.pseudoRange.mutation.transitionDuration.thumb};
          transform: translate(0, calc(-50% + ${inputRangeTrackHeight} / 2));
          box-shadow: ${cmpTokens.pseudoRange.elevation.boxShadow.thumb.base};
          border-radius: ${cmpTokens.pseudoRange.shape.borderRadius.thumb.base};
          width: ${inputRangeHandlerSize};
          height: ${inputRangeHandlerSize};
          background-color: ${cmpTokens.pseudoRange.color.background.thumb
            .base};
        }

        &:focus::-webkit-slider-thumb,
        &:hover::-webkit-slider-thumb {
          box-shadow: ${cmpTokens.pseudoRange.elevation.boxShadow.thumb
            .hovered};
        }
      `};
    `;
  }}
`;
