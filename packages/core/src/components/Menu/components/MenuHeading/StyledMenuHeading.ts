import styled, { css } from 'styled-components';
import { menuItemSizeConfig } from '../MenuItem/constants';

export const StyledMenuHeading = styled.li`
  list-style: none;

  ${({ theme }) => css`
    padding: ${theme.alias.space.cmp.md} 0 ${theme.alias.space.cmp.sm}
      ${menuItemSizeConfig(theme).horPadding};

    &:first-of-type {
      padding-top: 0;
    }
  `}
`;
