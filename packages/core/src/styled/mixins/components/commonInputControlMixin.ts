import { css } from 'styled-components';
import type { DefaultTheme } from 'styled-components';

import type {
  ControlWidth,
  TFieldSize,
  TFieldStatus,
} from '../../../declarations';
import {
  getFieldState,
  getFieldControlTypo,
} from '../../../components/Field/helpers';
import { disabledMixin } from '../state';

interface commonInputControlMixinProps {
  disabled?: boolean;
  inputWidth?: ControlWidth;
  readOnly?: boolean;
  $size?: TFieldSize;
  status?: TFieldStatus;
  theme: DefaultTheme;
}

/**
 * Get the InputControl common styles to be used in TextAreaControl too for example.
 *
 * @param props The object param
 * @param props.disabled If the state of the element is disabled
 * @param props.inputWidth Predefined width of the input. It should reflect the length of the content you expect the user to enter.
 * @param props.readOnly If the state of the element is readonly
 * @param props.$size The size of the element
 * @param props.status The status of the component: error, success... etc.
 * @param props.theme The common theme object with all the tokens
 * @return object with the css.
 */
export const commonInputControlMixin = ({
  disabled,
  inputWidth,
  readOnly,
  $size = 'md',
  status = 'base',
  theme,
}: commonInputControlMixinProps) => {
  const state = getFieldState({ readOnly });
  const aliasTokens = theme.alias;
  const fieldTokens = aliasTokens.fields;
  const inputBorderRadius = fieldTokens.shape.borderRadius;
  const inputWidthEval = getControlWidth({ theme, controlWidth: inputWidth });
  const inputHeight = fieldTokens.size.height[$size];
  const inputHorPadding = fieldTokens.space.padding.hor[$size];
  return css`
    ${getFieldControlTypo({ theme, size: $size })};
    display: flex;
    appearance: none;
    position: relative;
    transition:
      border ${fieldTokens.mutation.transitionDuration} ease-in-out,
      box-shadow ${fieldTokens.mutation.transitionDuration} ease-in-out;
    outline: none;
    border-width: ${fieldTokens.shape.borderSize.base};
    border-style: solid;
    border-color: ${fieldTokens.color.border[status][state]};
    border-radius: ${inputBorderRadius};
    width: ${inputWidthEval || '100%'};
    height: ${inputHeight};
    padding: 0 ${inputHorPadding};
    background-color: ${fieldTokens.color.background[status][state]};
    color: ${fieldTokens.color.text[status][state]};

    ${disabled &&
    css`
      ${disabledMixin(theme)};
    `};

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
  `;
};

interface GetControlWidthProps {
  controlWidth: ControlWidth;
  theme: DefaultTheme;
}

/**
 * Get the css value with the pre-defined width of a field control (input, select...).
 *
 * @param props The object param
 * @param props.controlWidth The pre-defined or defined directly value of the field control width.
 * @param props.theme The common theme object with all the tokens
 * @return css value based in a design token from theme.
 */
export const getControlWidth = ({
  theme,
  controlWidth,
}: GetControlWidthProps) => {
  return theme.alias.fields.size.width[controlWidth] || controlWidth;
};
