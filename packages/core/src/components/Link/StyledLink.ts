import styled, { css } from 'styled-components';

import { type ILinkMixin, linkMixin } from './utils/linkMixin';

export interface StyledLinkProps
  extends Omit<ILinkMixin, 'theme' | 'linkTokens'> {}

export const StyledLink = styled.a<StyledLinkProps>`
  ${({ colorScheme, underlined, wide, theme, size, state, lineClamp }) => {
    const linkTokens = theme.cmp.link;
    return css`
      ${linkMixin({
        colorScheme,
        underlined,
        wide,
        size,
        state,
        theme,
        linkTokens,
        lineClamp,
      })}
    `;
  }}
`;
