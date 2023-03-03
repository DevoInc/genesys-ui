import styled, { css } from 'styled-components';

import { utils } from '../../../styled/functions/utils';
import { TabsColorScheme } from '../declarations';

export interface StyledTabsMarkProps {
  colorScheme?: TabsColorScheme;
}

export const StyledTabsMark = styled.div<StyledTabsMarkProps>`
  ${utils.transitionDefault}
  ${({ colorScheme, theme }) => {
    const tokens = theme.tokens.cmp.tabs.mark;
    return css`
      position: absolute;
      bottom: 0;
      padding: 0 ${tokens.space.padding};

      ::before {
        content: '';
        display: block;
        height: ${tokens.size.height};
        background: ${tokens.color.fill[colorScheme]};
        border-radius: ${tokens.shape.borderRadius};
      }
    `;
  }}
`;
