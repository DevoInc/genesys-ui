import styled from 'styled-components';

export const StyledAppMenuPopoverItemActions = styled.span`
  flex: 0 0 auto;
  margin-left: auto;
  opacity: 0;
  transition: ${({ theme }) =>
    `opacity ${theme.cmp.appMenu.popoverItemActions.mutation.transitionDuration.opacity} ease-in-out`};

  *:enabled:hover &,
  *:link:hover & {
    opacity: 1;
  }
`;
