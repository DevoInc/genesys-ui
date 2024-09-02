import styled, { css } from 'styled-components';

import { type ILinkMixin, linkMixin } from './utils/linkMixin';
import { ILink } from './declarations';

export interface StyledLinkProps
  extends Omit<ILinkMixin, 'theme' | 'linkTokens'> {
  $colorScheme?: ILink['colorScheme'];
  $underlined?: boolean;
  $wide?: boolean;
  $size?: ILink['size'];
  $state?: ILink['state'];
  $lineClamp?: number;
}

export const StyledLink = styled.a<StyledLinkProps>`
  ${({
    $colorScheme,
    $underlined,
    $wide,
    theme,
    $size,
    $state,
    $lineClamp,
  }) => {
    const linkTokens = theme.cmp.link;
    return css`
      ${linkMixin({
        $colorScheme,
        $underlined,
        $wide,
        $size,
        $state,
        theme,
        linkTokens,
        $lineClamp,
      })}
    `;
  }}
`;
