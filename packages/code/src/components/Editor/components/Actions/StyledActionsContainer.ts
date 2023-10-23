import { Box } from '@devoinc/genesys-ui';
import styled, { css } from 'styled-components';

export const StyledActionsContainer = styled(Box)`
  ${({ theme }) => {
    const scrollbarsSize = theme.alias.space.cmp.sm;
    return css`
      z-index: 1;
      position: absolute;
      bottom: ${scrollbarsSize};
      right: ${scrollbarsSize};
    `;
  }}
`;
