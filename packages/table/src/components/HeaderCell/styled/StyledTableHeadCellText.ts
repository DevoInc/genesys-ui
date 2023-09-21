import { StyledTableCellContentText } from './StyledTableCellContentText';
import styled, { css } from 'styled-components';
import { truncateTypoMixin } from '@devoinc/genesys-ui';

export const StyledTableHeadCellText = styled(StyledTableCellContentText)`
  ${({ isSortable, theme }) => {
    const aliasTokens = theme.tokens.alias;
    return css`
      color: ${aliasTokens.color.text.heading.base};
      font-weight: ${aliasTokens.typographies.typo.fontWeight.heading};
      ${truncateTypoMixin()};
      margin-right: ${isSortable && aliasTokens.space.cmp.xs};
    `;
  }}
`;
