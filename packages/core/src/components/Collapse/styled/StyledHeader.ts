import styled, { css } from 'styled-components';

export interface StyledHeaderProps {
  expanded: boolean;
}

export const StyledHeader = styled.div<StyledHeaderProps>`
  ${({ expanded, theme }) => {
    const colorTokens = theme?.tokens?.alias?.color;

    return css`
      position: relative;
      transition: border-color 0.15s ease;
      border-bottom: solid 1px
        ${expanded ? 'transparent' : colorTokens?.border?.separator?.base.weak};
      min-height: 3.6rem;
      background-color: #f5f8fa;

      ${expanded &&
      css`
        background-color: #f5f8fa;
      `}
    `;
  }}
`;
