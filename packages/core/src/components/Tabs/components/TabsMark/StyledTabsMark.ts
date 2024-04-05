import styled, { css } from 'styled-components';

import type { TTabsColorScheme } from '../../declarations';

export interface StyledTabsMarkProps {
  colorScheme?: TTabsColorScheme;
}

export const StyledTabsMark = styled.div<StyledTabsMarkProps>`
  ${({ colorScheme, theme }) => {
    const tokens = theme.cmp.tabs.mark;
    const transitionDuration =
      theme.alias.mutation.transitionDuration.translation.hor.sm;
    return css`
      position: absolute;
      bottom: 0;
      transition: all ease-in-out ${transitionDuration};
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
