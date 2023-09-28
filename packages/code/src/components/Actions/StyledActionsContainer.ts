import { Box } from '@devoinc/genesys-ui';
import styled, { css } from 'styled-components';

export const StyledActionsContainer = styled(Box)`
  ${({ theme }) => {
    const scrollbarsSize = theme.alias.scrollbars.size.square.md;
    return css`
      z-index: 1;
      position: absolute;
      bottom: calc(${scrollbarsSize});
      right: ${scrollbarsSize};
    `;
  }}
`;
