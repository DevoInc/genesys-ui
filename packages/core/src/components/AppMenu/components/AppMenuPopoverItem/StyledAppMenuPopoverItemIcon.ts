import styled, { css } from 'styled-components';

export const StyledAppMenuPopoverItemIcon = styled.span`
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => {
    const tokens = theme.cmp.appMenu.popoverItemIcon;
    const square = tokens.size.square;
    return css`
      border-radius: ${tokens.shape.borderRadius};
      width: ${square};
      height: ${square};
      background-color: ${tokens.color.background.featured};
    `;
  }}
`;
