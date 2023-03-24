import styled, { css } from 'styled-components';

import {
  getFieldState,
  disabledMixin,
  FieldSize,
  FieldStatus,
} from '@devoinc/genesys-ui';

export interface StyledColorPickerProps {
  colorIndicatorType?: 'square' | 'circle';
  disabled?: boolean;
  readOnly?: boolean;
  size?: FieldSize;
  status?: FieldStatus;
}

export const StyledColorPicker = styled.button<StyledColorPickerProps>`
  ${({
    disabled,
    colorIndicatorType,
    readOnly,
    size,
    status = 'base',
    theme,
  }) => {
    const state = getFieldState({ readOnly });
    const isSquare =
      colorIndicatorType === 'square' || colorIndicatorType === 'circle';
    const isCircle = colorIndicatorType === 'circle';

    const fieldTokens = theme.alias.fields;
    const colorPickerTokens = theme.cmp.colorPicker;

    const transitionDuration = fieldTokens.mutation.transitionDuration;
    const height = colorPickerTokens.size.height[size];
    const width = colorPickerTokens.size[isSquare ? 'height' : 'width'][size];
    const spacing = colorPickerTokens.space;
    const borderRadius =
      colorPickerTokens.shape.borderRadius[isCircle ? 'isCircle' : 'base'];
    return css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      appearance: none;
      padding: 0;
      margin: 0;
      transition: border ${transitionDuration} ease-in-out,
        box-shadow ${transitionDuration} ease-in-out;
      border-width: ${fieldTokens.shape.borderSize.base};
      border-style: solid;
      border-color: ${fieldTokens.color.border[status][state]};
      border-radius: ${borderRadius};
      background-color: ${fieldTokens.color.background.base[state]};
      width: ${width};
      height: ${height};
      cursor: pointer;

      ${!disabled &&
      !readOnly &&
      css`
        &:hover {
          border-color: ${fieldTokens.color.border[status].hovered};
          color: ${fieldTokens.color.text.base.hovered};
        }

        &:focus,
        &:focus-visible {
          box-shadow: ${fieldTokens.elevation.boxShadow[status].focused};
          border-color: ${fieldTokens.color.border[status].focused};
          color: ${fieldTokens.color.text.base.focused};
          outline: none;
        }
      `}

      ${disabled &&
      css`
        ${disabledMixin(theme)};
      `}

      .color-indicator__sample {
        width: calc(${width} - (${spacing} * 2));
        height: calc(${height} - (${spacing} * 2));
        border-radius: ${borderRadius};
      }
    `;
  }};
`;
