import styled, { css } from 'styled-components';

import { ILinkMixin, linkMixin } from './utils/linkMixin';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledLinkProps extends ILinkMixin {}

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
