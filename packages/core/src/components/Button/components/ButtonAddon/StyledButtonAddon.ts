import styled, { css } from 'styled-components';

import type { IButtonAddon } from './declarations';

export interface StyledButtonAddonProps {
  $hasSpace?: boolean;
  $isDropdown?: boolean;
  $position?: IButtonAddon['position'];
  $size?: IButtonAddon['size'];
}

export const StyledButtonAddon = styled.span<StyledButtonAddonProps>`
  ${({ $hasSpace, $isDropdown, $position, $size, theme }) => {
    const spacingTokens = theme.cmp.button.icon.space;
    const marginTokens = spacingTokens.margin;
    const offsetTokens = spacingTokens.offset;
    return css`
      display: inline-flex;
      flex: 0;
      user-select: none;
      line-height: 1;

      ${$hasSpace &&
      css`
        ${$position === 'left' &&
        css`
          padding-right: ${marginTokens[$size]};
          margin-left: ${offsetTokens[$size]};
        `};
        ${$position === 'right' &&
        css`
          order: 2;
          padding-left: ${marginTokens[$size]};
          margin-right: ${offsetTokens[$size]};
        `};
      `};

      // is dropdown and there is position (and label)
      ${$hasSpace &&
      $isDropdown &&
      css`
        margin-left: auto;
      `};
    `;
  }}
`;
