import styled, { css } from 'styled-components';

export const StyledHighlighted = styled.mark`
  ${({ theme }) => css`
    background: ${theme.cmp.highlighted.color.background};
    color: inherit;
  `}
`;
