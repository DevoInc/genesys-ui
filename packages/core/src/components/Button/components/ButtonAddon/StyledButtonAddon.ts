import styled, { css } from 'styled-components';

import iconDictionary from '@devoinc/genesys-icons/dist/icon-variables';

import { ButtonIconPosition, ButtonSize } from '../../declarations';

export interface StyledButtonAddonProps {
  hasSpace?: boolean;
  /** If the button addon is an icon and what icon is  */
  icon?: keyof typeof iconDictionary;
  /** If the button addon is a dropdown */
  isDropdown?: boolean;
  /** If the button addon is a loader */
  isLoader?: boolean;
  /** If the button has square format as an IconButton */
  squared?: boolean;
  /** The position of addon  */
  position?: ButtonIconPosition;
  /** Sets how much spacing, font-size, width... has the button addon etc. */
  size?: ButtonSize;
}

export const StyledButtonAddon = styled.span<StyledButtonAddonProps>`
  ${({ hasSpace, isDropdown, position, size, theme }) => {
    const spacingTokens = theme.cmp.button.icon.space;
    const marginTokens = spacingTokens.margin;
    const offsetTokens = spacingTokens.offset;
    return css`
      display: inline-flex;
      flex: 0;
      user-select: none;
      line-height: 1;

      ${hasSpace &&
      css`
        ${position === 'left' &&
        css`
          padding-right: ${marginTokens[size]};
          margin-left: ${offsetTokens[size]};
        `};
        ${position === 'right' &&
        css`
          order: 2;
          padding-left: ${marginTokens[size]};
          margin-right: ${offsetTokens[size]};
        `};
      `};

      // is dropdown and there is position (and label)
      ${hasSpace &&
      isDropdown &&
      css`
        margin-left: auto;
      `};
    `;
  }}
`;
