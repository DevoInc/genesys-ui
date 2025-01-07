import styled, { css } from 'styled-components';

import {
  getFieldState,
  disabledMixin,
  TFieldSize,
  TFieldStatus,
} from '@devoinc/genesys-ui';

export interface StyledColorPickerProps {
  $colorIndicatorType?: 'square' | 'circle';
  $disabled?: boolean;
  $readOnly?: boolean;
  $size?: TFieldSize;
  $status?: TFieldStatus;
}

export const StyledColorPicker = styled.button<StyledColorPickerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  padding: 0;
  margin: 0;
  ${({
    $disabled,
    $colorIndicatorType,
    $readOnly,
    $size,
    $status = 'base',
    theme,
  }) => {
    const state = getFieldState({ $readOnly });
    const isSquare =
      $colorIndicatorType === 'square' || $colorIndicatorType === 'circle';
    const isCircle = $colorIndicatorType === 'circle';
    const colorPickerTokens = theme.cmp.colorPicker;
    const transitionDuration = colorPickerTokens.mutation.transitionDuration;
    const height = colorPickerTokens.size.height[$size];
    const width = colorPickerTokens.size[isSquare ? 'height' : 'width'][$size];
    const spacing = colorPickerTokens.space;
    const borderRadius =
      colorPickerTokens.shape.borderRadius[isCircle ? 'isCircle' : 'base'];

    return css`
      transition:
        border ${transitionDuration} ease-in-out,
        box-shadow ${transitionDuration} ease-in-out;
      border-width: ${colorPickerTokens.shape.borderSize};
      border-style: solid;
      border-color: ${colorPickerTokens.color.border[$status][state]};
      border-radius: ${borderRadius};
      background-color: ${colorPickerTokens.color.background.base[state]};
      width: ${width};
      height: ${height};

      ${!$disabled && !$readOnly
        ? `
            cursor: pointer;

            &:hover {
              border-color: ${colorPickerTokens.color.border[$status].hovered};
              color: ${colorPickerTokens.color.text.base.hovered};
            }

            &:focus,
            &:focus-visible {
              //box-shadow: ${
                colorPickerTokens.elevation.boxShadow[$status].focused
              };
              border-color: ${colorPickerTokens.color.border[$status].focused};
              color: ${colorPickerTokens.color.text.base.focused};
              outline: none;
            }
          `
        : ''}

      ${$disabled ? disabledMixin(theme) : ''}

      .color-indicator__sample {
        width: calc(${width} - (${spacing} * 2));
        height: calc(${height} - (${spacing} * 2));
        border-radius: ${borderRadius};
      }
    `;
  }};
`;
