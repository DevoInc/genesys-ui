import styled, { css } from 'styled-components';

import { StyledBox } from '../../../Box/StyledBox';

export const StyledAppBarContainer = styled(StyledBox)`
  ${({ theme }) => {
    return css`
      background-color: ${theme.cmp.appBar.color.background};
    `;
  }}
`;
