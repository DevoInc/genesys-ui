import styled, { css } from 'styled-components';

import { Box } from '../Box';

export const StyledAppBarContainer = styled(Box)`
  ${({ theme }) => {
    return css`
      background-color: ${theme.tokens.cmp.appBar.color.background};
    `;
  }}
`;
