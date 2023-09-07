import { css } from 'styled-components';

/**
 * Get the button reset styles
 *
 * @return object with the css.
 */
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
