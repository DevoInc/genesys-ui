import styled, { css } from 'styled-components';
import { SketchPicker } from 'react-color';

import { getFieldControlTypoObj } from '@devoinc/genesys-ui';

export const StyledSketchPicker = styled(SketchPicker)`
  ${({ theme }) => {
    const aliasTokens = theme.alias;
    const fieldTokens = aliasTokens.fields;
    const spacingTokens = aliasTokens.space;
    const sketchPickerTokens = theme.cmp.colorPicker.sketchPicker;

    const typoObj = getFieldControlTypoObj({ theme, size: 'sm' });
    const transitionDuration = fieldTokens.mutation.transitionDuration;
    const baseTextColor = aliasTokens.color.text.body.base;

    return css`
      position: absolute;
      z-index: ${aliasTokens.elevation.zIndex.depth.activated};
      transform: translateY(0.6rem);
      box-shadow: ${aliasTokens.elevation.boxShadow.depth.activated} !important;
      border-radius: ${aliasTokens.shape.borderRadius.elevated} !important;
      background-color: ${sketchPickerTokens.color.background} !important;

      input {
        transition: border ${transitionDuration} ease-in-out,
          box-shadow ${transitionDuration} ease-in-out;
        outline: none;
        box-shadow: none !important;
        border: solid ${fieldTokens.shape.borderSize.base}
          ${fieldTokens.color.border.base.enabled} !important;
        border-radius: ${fieldTokens.shape.borderRadius};
        width: auto !important;
        max-width: 2.2rem;
        background-color: ${fieldTokens.color.background.base.enabled};
        font-size: ${typoObj['font-size']} !important;
        line-height: ${typoObj['line-height']};
        color: ${fieldTokens.color.text.base.enabled};

        &:hover {
          border-color: ${fieldTokens.color.border.base.hovered} !important;
          color: ${fieldTokens.color.text.base.hovered} !important;
        }

        &:focus {
          box-shadow: ${fieldTokens.elevation.boxShadow.base
            .focused} !important;
          border-color: ${fieldTokens.color.border.base.focused} !important;
          color: ${fieldTokens.color.text.base.focused} !important;
        }
      }

      label,
      input + span {
        color: ${baseTextColor} !important;
      }

      input + span {
        margin-top: 0.2rem;
        margin-bottom: 0.1rem;
      }

      > div:nth-child(3) > div:first-child input {
        max-width: 4.2rem;
      }

      > .flexbox-fix:last-child {
        border-color: ${sketchPickerTokens.color.border} !important;
        margin-top: ${spacingTokens.cmp.xxs} !important;
        padding-top: ${spacingTokens.cmp.sm} !important;
      }
    `;
  }};
`;
