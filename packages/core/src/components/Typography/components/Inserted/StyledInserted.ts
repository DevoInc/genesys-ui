import styled, { css } from 'styled-components';

export const StyledInserted = styled.ins`
  ${({ theme }) => css`
    background: ${theme.cmp.inserted.color.background};
    color: inherit;
    text-decoration: none;
  `}
`;
