import styled from 'styled-components';

export const StyledHighlighted = styled.mark`
  background: ${({ theme }) => theme.cmp.highlighted.color.background};
  color: inherit;
`;
