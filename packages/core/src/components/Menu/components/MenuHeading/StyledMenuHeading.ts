import styled, { css } from 'styled-components';

export const StyledMenuHeading = styled.li`
  list-style: none;

  ${({ theme }) => css`
    padding: ${theme.cmp.menu.heading.space.paddingTop}
      ${theme.cmp.menu.heading.space.paddingRight}
      ${theme.cmp.menu.heading.space.paddingBottom}
      ${theme.cmp.menu.heading.space.paddingLeft};

    &:first-of-type {
      padding-top: 0;
    }
  `}
`;
