import styled, { css } from 'styled-components';
import { SketchPicker } from 'react-color';

import { getFieldControlTypoObj } from '@devoinc/genesys-ui';

export const StyledSketchPicker = styled(SketchPicker)`
  ${({ theme }) => {
    const aliasTokens = theme.alias;
    const spacingTokens = aliasTokens.space;
    const sketchPickerTokens = theme.cmp.colorPicker.sketchPicker;
    const sketchPickerInputTokens = theme.cmp.colorPicker.sketchPickerInput;

    const typoObj = getFieldControlTypoObj({ theme, $size: 'sm' });
    const transitionDuration = sketchPickerTokens.mutation.transitionDuration;
    const baseTextColor = sketchPickerTokens.color.text;

    return css`
      position: absolute;
      z-index: ${sketchPickerTokens.elevation.zIndex};
      transform: translateY(0.6rem);
      box-shadow: ${sketchPickerTokens.elevation.boxShadow} !important;
      border-radius: ${sketchPickerTokens.shape.borderRadius} !important;
      background-color: ${sketchPickerTokens.color.background} !important;

      input {
        transition:
          border ${transitionDuration} ease-in-out,
          box-shadow ${transitionDuration} ease-in-out;
        outline: none;
        box-shadow: none !important;
        border: solid ${sketchPickerInputTokens.shape.borderSize.base}
          ${sketchPickerInputTokens.color.border.base} !important;
        border-radius: ${sketchPickerInputTokens.shape.borderRadius};
        width: auto !important;
        max-width: 2.2rem;
        background-color: ${sketchPickerInputTokens.color.background};
        font-size: ${typoObj['font-size']} !important;
        line-height: ${typoObj['line-height']};
        color: ${sketchPickerInputTokens.color.text.base};

        &:hover {
          border-color: ${sketchPickerInputTokens.color.border
            .hovered} !important;
          color: ${sketchPickerInputTokens.color.text.hovered} !important;
        }

        &:focus {
          box-shadow: ${sketchPickerInputTokens.elevation.boxShadow
            .focused} !important;
          border-color: ${sketchPickerInputTokens.color.border
            .focused} !important;
          color: ${sketchPickerInputTokens.color.text.focused} !important;
        }
      }

      label,
      input + span {
        color: ${baseTextColor} !important;
      }

      > div:nth-child(3) > div:first-child input {
        max-width: 4.5rem;
      }
      // TODO: cmpTokens
      > .flexbox-fix:last-child {
        border-color: ${sketchPickerTokens.color.border} !important;
        margin-top: ${spacingTokens.cmp.xxs} !important;
        padding-top: ${spacingTokens.cmp.sm} !important;
      }
    `;
  }};
`;
