import { css } from 'styled-components';

/**
 * Get the styles for the backdrop of menu item
 *
 * @param props The object param
 * @param props.tokens The object with all the menu item tokens
 * @param props.state The state of the menu item
 * @return object with the css.
 */
export const menuItemBackdropMixin = ({ tokens, state }) => css`
  color: ${tokens.color.text[state]};

  &::before {
    background-color: ${tokens.color.backdrop[state]};
  }
`;
