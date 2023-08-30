import styled, { css } from 'styled-components';

export const StyledMenuHeading = styled.li`
  ${({ theme }) => css`
    padding: ${theme.alias.space.cmp.md} 0 ${theme.alias.space.cmp.sm} 0;

    &:first-of-type {
      padding-top: 0;
    }
  `}
  list-style: none;
`;
