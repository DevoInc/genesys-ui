import styled from 'styled-components';

export const StyledSeparator = styled.hr`
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: ${({ theme }) => theme.alias.menus.shape.border.separator};
`;
