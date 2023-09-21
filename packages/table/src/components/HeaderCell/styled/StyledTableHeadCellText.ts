import styled, { css, DefaultTheme } from 'styled-components';
import { truncateTypoMixin } from '@devoinc/genesys-ui';
import { StyledTableCellContentText } from '../../../styled';

interface StyledTableHeadCellTextProps {
  theme: DefaultTheme;
  isSortable?: boolean;
}

export const StyledTableHeadCellText = styled(
  StyledTableCellContentText,
)<StyledTableHeadCellTextProps>`
  ${({ isSortable, theme }) => {
    const aliasTokens = theme.alias;
    return css`
      color: ${aliasTokens.color.text.heading.base};
      font-weight: ${aliasTokens.typographies.typo.fontWeight.heading};
      ${truncateTypoMixin()};
      margin-right: ${isSortable && aliasTokens.space.cmp.xs};
    `;
  }}
`;
