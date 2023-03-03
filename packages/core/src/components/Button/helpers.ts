import { css } from 'styled-components';

// BUTTON RESET - MIXIN ------------------------------------------------------ /

export const btnResetMixin = css`
  margin: 0;
  padding: 0;
  width: auto;
  color: inherit;
  font: inherit;
  text-transform: inherit;
  letter-spacing: inherit;
  line-height: normal;
  background-color: transparent;
  border: none;
  overflow: visible;
  cursor: pointer;
  user-select: none;
  -webkit-font-smoothing: inherit;
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }

  &:disabled {
    border-color: inherit;
    cursor: not-allowed;
  }
`;

/**
 * Loading animation mixin (css function)
 *
 * @param props object with the params
 * @param props.colorScheme color scheme of the Button
 * @param props.loadingType Type of the Loading
 * @param props.tokens Object with the needed tokens for animation
 * @return Object with the mixin styles
 */
export const loadingAnimationMixin = ({ colorScheme, loadingType, tokens }) => {
  return css`
    @keyframes ${loadingType + 'Animation'} {
      0% {
        background-color: ${tokens.color.background[colorScheme].enabled};
        color: ${tokens.color.text[colorScheme].enabled};
      }
      30% {
        background-color: ${tokens.color.background[loadingType].enabled};
        color: ${tokens.color.text[loadingType].enabled};
      }
      75% {
        background-color: ${tokens.color.background[loadingType].enabled};
        color: ${tokens.color.text[loadingType].enabled};
      }
      90% {
        background-color: ${tokens.color.background[colorScheme].enabled};
        color: ${tokens.color.text[colorScheme].enabled};
      }
      100% {
        background-color: ${tokens.color.background[colorScheme].enabled};
        color: ${tokens.color.text[colorScheme].enabled};
      }
    }
    animation: ${loadingType + 'Animation'} 2s ease-in-out;
    animation-fill-mode: forwards;
  `;
};
