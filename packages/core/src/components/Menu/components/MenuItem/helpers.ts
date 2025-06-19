import { css, DefaultTheme } from 'styled-components';

/**
 * Get the styles for the backdrop of menu item
 *
 * @param props The object param
 * @param props.tokens The object with all the menu item tokens
 * @param props.state The state of the menu item
 * @return object with the CSS.
 */
export const menuItemBackdropMixin = ({ tokens, state }) => css`
  color: ${tokens.color.text[state]};

  &::before {
    background-color: ${tokens.color.backdrop[state]};
  }
`;

/**
 * Get the padding-right style value for the menu item when there is an overlapped interactive content
 *
 * @param width The width of the interactive content
 * @param theme The object with all the design tokens
 * @return string with the CSS property value.
 */
export const getMenuItemPaddingWithInteractiveBlock = (
  width: number,
  theme: DefaultTheme,
) => {
  const interactiveBlockWidthCss = `${width.toFixed(2)}px`;
  return `calc(${interactiveBlockWidthCss} + ${theme.cmp.menu.item.space.paddingHor} * 2)`;
};
