import styled from 'styled-components';

export const StyledAppMenuPopoverItemActions = styled.span`
  position: absolute;
  opacity: 0;
  right: ${({ theme }) => theme.cmp.menu.item.space.paddingHor};
  transition: ${({ theme }) =>
    `opacity ${theme.cmp.appMenu.popoverItemActions.mutation.transitionDuration.opacity} ease-in-out`};

  [role='presentation']:hover > &,
  [role='presentation']:hover > & {
    opacity: 1;
  }
`;
