import { css } from 'styled-components';
import { DefaultTheme } from 'styled-components';

import { FieldSize, FieldStatus } from '../../';

import { flexMixin } from './utilsMixins';

interface CheckRadioProps {
  disabled?: boolean;
  size?: FieldSize;
  status?: FieldStatus;
  theme: DefaultTheme;
}

/**
 * Get the checkbox and radio common tokens.
 *
 * @param props The object param
 * @param props.size The size of the element
 * @param props.status The status of the component: error, success... etc.
 * @param props.theme The common theme object with all the tokens
 * @return object with the specific tokens.
 */
export const getCheckRadioTokens = ({
  size = 'md',
  status = 'base',
  theme,
}: CheckRadioProps) => {
  const fieldTokens = theme.alias.fields;
  return {
    borderColor: fieldTokens.color.border[status].enabled,
    borderColorChecked: fieldTokens.color.border[status].checked,
    borderColorHovered: fieldTokens.color.border[status].hovered,
    borderColorFocused: fieldTokens.color.border[status].focused,
    borderWidth: fieldTokens.shape.borderSize.check,
    bgColor: fieldTokens.color.background[status].enabled,
    boxShadow: fieldTokens.elevation.boxShadow[status].focused,
    bgColorChecked: fieldTokens.color.background[status].checked,
    disabledOpacity: fieldTokens.shape.opacity.disabled,
    square: fieldTokens.size.square[size],
    textColor: fieldTokens.color.text[status].checked,
    animationTime: fieldTokens.mutation.transitionDuration,
  };
};

/**
 * Get the checkbox and radio common styles.
 *
 * @param props The object param
 * @param props.size The size of the element
 * @param props.status The status of the component: error, success... etc.
 * @param props.theme The common theme object with all the tokens
 * @return object with the css.
 */
export const checkRadioMixin = ({
  size = 'md',
  status = 'base',
  theme,
}: CheckRadioProps) => {
  const checkRadioTokens = getCheckRadioTokens({
    size,
    status,
    theme,
  });
  const square = checkRadioTokens.square;
  return css`
    ${flexMixin({ dis: 'inline-flex', jc: 'center', ai: 'center' })}
    position: relative;
    transition: border-color ease-in-out ${checkRadioTokens.animationTime};
    width: ${square};
    height: ${square};
    line-height: ${square};
    border: solid ${checkRadioTokens.borderWidth}
      ${checkRadioTokens.borderColor};
    background-color: ${checkRadioTokens.bgColor};
    color: ${checkRadioTokens.textColor};
    cursor: pointer;

    &:not(:disabled) {
      cursor: pointer;
    }

    &:disabled {
      background-clip: padding-box;
      cursor: not-allowed;
      opacity: ${checkRadioTokens.disabledOpacity};

      &:not(:checked) {
        background-color: ${checkRadioTokens.borderColor};
      }
    }

    &:not(:checked):not(:disabled):hover,
    &:not(:checked):not(:disabled):hover {
      border-color: ${checkRadioTokens.borderColorHovered};
    }

    &:focus-visible {
      box-shadow: ${checkRadioTokens.boxShadow};
      border-color: ${checkRadioTokens.borderColorFocused};
      outline: none;
    }
  `;
};
