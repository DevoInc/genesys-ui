import styled, { css } from 'styled-components';
import type { TAppMenuCollapsed } from '../../declarations';

interface StyledAppMenuHeaderLogoCompactProps {
  $collapsed?: TAppMenuCollapsed;
}

export const StyledAppMenuHeaderLogoCompact = styled.img<StyledAppMenuHeaderLogoCompactProps>`
  position: relative;
  opacity: 0;
  width: 0;
  left: -100%;
  overflow: hidden;

  ${({ $collapsed, theme }) => {
    const tokens = theme.cmp.appMenu.logoCompact;
    return css`
      margin: ${$collapsed ? '0 auto' : 'unset'};
      transition:
        opacity ${tokens.mutation.transitionDuration.opacity} ease-in-out,
        width ${tokens.mutation.transitionDuration.width} ease-in-out,
        left ${tokens.mutation.transitionDuration.left} ease-in-out;

      ${$collapsed &&
      css`
        opacity: 1;
        left: 0;
        width: auto;
        overflow: visible;
      `}
    `;
  }};
`;
