import styled from 'styled-components';

export const StyledCalendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  justify-content: center;
  row-gap: ${({ theme }) => theme.alias.space.cmp.xxs};
  min-width: 21rem;
`;
