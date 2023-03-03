import { css } from 'styled-components';

/**
 * ButtonStatus mixin (css function)
 *
 * @param props.tokens Object with the needed tokens for animation
 * @param props.state Button prop
 * @param props.colorScheme Button prop
 * @return Object with the mixin styles
 */
export const iconButtonStatusMixin = ({ tokens, state, colorScheme }) => {
  const hasMouseState =
    state === 'focused' || state === 'hovered' || state === 'pressed';
  return css`
    background-color: ${tokens.color.background[colorScheme][state]};
    color: ${tokens.color.text[colorScheme][state]};
    &:hover {
      background-color: ${tokens.color.background[colorScheme].hovered};
      color: ${tokens.color.text[colorScheme].hovered};
    }
    &:focus {
      background-color: ${tokens.color.background[colorScheme].focused};
      color: ${tokens.color.text[colorScheme].focused};
    }
    &:active {
      background-color: ${tokens.color.background[colorScheme].pressed};
      color: ${tokens.color.text[colorScheme].pressed};
    }
    &&& {
      background-color: ${hasMouseState &&
      `${tokens.color.background[colorScheme][state]}`};
      color: ${hasMouseState && `${tokens.color.text[colorScheme][state]}`};
    }
  `;
};
