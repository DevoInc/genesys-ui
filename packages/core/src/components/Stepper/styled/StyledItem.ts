import styled, { css } from 'styled-components';

export const StyledItem = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.tokens.cmp.stepper.item.space.gap};
  `};
`;
