import styled, { css } from 'styled-components';

import { Divider } from '../../Divider';

export const StyledTabsDivider = styled(Divider)`
  ${({ theme }) => {
    const tokens = theme.cmp.tabs.divider;
    return css`
      margin: 0 ${tokens.space.margin};
      background: ${tokens.color.background};
    `;
  }}
`;
