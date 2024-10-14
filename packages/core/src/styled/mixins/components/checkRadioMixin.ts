import { css } from 'styled-components';
import type { DefaultTheme } from 'styled-components';

import type { TFieldSize, TFieldStatus } from '../../../declarations';

interface ICheckRadioMixin {
  $size?: TFieldSize;
  $status?: TFieldStatus;
  tokens:
    | DefaultTheme['cmp']['checkboxControl']
    | DefaultTheme['cmp']['radioControl'];
}

/**
 * Get the checkbox and radio common styles.
 *
 * @param props The object param
 * @param props.$size The size of the element
 * @param props.$status The status of the component: error, success... etc.
 * @param props.tokens The object with the component tokens
 * @return object with the css.
 */
export const checkRadioMixin = ({
  $size = 'md',
  $status = 'base',
  tokens,
}: ICheckRadioMixin) => {
  const square = tokens.size.square[$size];
  const transitionDuration = tokens.mutation.transitionDuration;
  return css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: border-color ease-in-out ${transitionDuration};
    width: ${square};
    height: ${square};
    line-height: ${square};
    border: solid ${tokens.shape.borderSize[$size]}
      ${tokens.color.border[$status].enabled};
    background-color: ${tokens.color.background[$status].enabled};
    color: ${tokens.color.text[$status].enabled};
    cursor: pointer;

    &:not(:disabled) {
      cursor: pointer;
    }

    &:disabled {
      background-clip: padding-box;
      cursor: not-allowed;
      opacity: ${tokens.shape.opacity.disabled};

      &:not(:checked) {
        background-color: ${tokens.color.border[$status].enabled};
      }
    }

    &:not(:checked):not(:disabled):hover,
    &:not(:checked):not(:disabled):hover {
      border-color: ${tokens.color.border[$status].hovered};
    }

    &:focus-visible {
      box-shadow: ${tokens.elevation.boxShadow[$status].focused};
      border-color: ${tokens.color.border[$status].focused};
      outline: none;
    }
  `;
};
