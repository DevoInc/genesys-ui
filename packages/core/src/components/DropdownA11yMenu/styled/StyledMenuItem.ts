import styled, { css } from 'styled-components';

export interface StyledMenuItemProps {
  /** If the item is disabled.  */
  disabled?: boolean;
  /** If the item is highlighted.  */
  highlighted?: boolean;
  /** If the item checkbox is checked, change the item background color.  */
  selected?: boolean;
}

const checkIsHighlighted = (isHighlighted, themeColor) =>
  isHighlighted ? themeColor.backdrop.hovered : themeColor.background.enabled;

export const StyledMenuItem = styled.li<StyledMenuItemProps>`
  list-style: none;
  user-select: none;
  width: 100%;
  font-family: 'Devo Font', sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  -webkit-letter-spacing: 0;
  -moz-letter-spacing: 0;
  -ms-letter-spacing: 0;
  letter-spacing: 0;
  color: ${({ theme }) => theme.alias.menus.item.color.text.enabled};

  background-color: ${({ selected, highlighted, theme }) =>
    selected
      ? theme.alias.menus.item.color.background.activated
      : checkIsHighlighted(highlighted, theme.alias.menus.item.color)};

  ${({ disabled, theme }) =>
    disabled
      ? css`
          opacity: 0.4;
          cursor: not-allowed;
        `
      : css`
          cursor: pointer;
          > div:hover {
            background-color: ${theme.alias.menus.item.color.backdrop.hovered};
          }
          > div:focus {
            background-color: ${theme.alias.menus.item.color.backdrop.hovered};
          }
        `}
`;
