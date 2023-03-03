import styled, { css } from 'styled-components';

export interface StyledTabsProps {
  /** Adjust the appearance of the TabsContainer */
  contained?: boolean;
}

export const StyledTabs = styled.nav<StyledTabsProps>`
  ${({ contained, theme }) => {
    const tokens = theme.tokens.cmp.tabs.container;
    const boxShadow = `inset 0 ${tokens.shape.borderSize} 0 ${tokens.color.border},
                       inset 0 -${tokens.shape.borderSize} 0 ${tokens.color.border}`;

    return css`
      position: relative;
      display: flex;

      ${contained &&
      css`
        padding: 0 ${tokens.space.padding};
        background: ${tokens.color.background};
        box-shadow: ${boxShadow};
      `}
    `;
  }}
`;
