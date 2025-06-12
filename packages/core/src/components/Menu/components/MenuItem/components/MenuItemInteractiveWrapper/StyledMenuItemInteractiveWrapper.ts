import styled, { css } from 'styled-components';

export const StyledMenuItemInteractiveWrapper = styled.div`
  position: absolute;

  ${({ theme }) => {
    const tokens = theme.cmp.menu.item;
    return css`
      right: ${tokens.space.paddingHor};
    `;
  }}
`;
