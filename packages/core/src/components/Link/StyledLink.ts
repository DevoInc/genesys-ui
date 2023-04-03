import styled, { css } from 'styled-components';

import { linkMixin } from './utils/linkMixin';
import { LinkColorScheme, LinkSize, LinkState } from './declarations';

export interface StyledLinkProps {
  /** This property defines the color scheme for the Link. */
  colorScheme?: LinkColorScheme;
  /** If the Link is underlined to make it more prominent. */
  underlined?: boolean;
  /** If the Link fits the full available width of its parent. Makes it behavior as a block.*/
  wide?: boolean;
  /** Size of the component. */
  size?: LinkSize;
  /** Interaction state of the component. */
  state?: LinkState;
  /** This property as boolean defines if the Link is shown in one line with
   * ellipsis or, as a number, it defines the number of lines before
   * ellipsis (css line-clamp). */
  lineClamp?: number;
}

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
