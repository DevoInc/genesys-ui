import styled, { css } from 'styled-components';
import type { TAppMenuCollapsed } from '../../declarations';

interface StyledAppMenuHeaderLogoProps {
  $collapsed?: TAppMenuCollapsed;
}

export const StyledAppMenuHeaderLogo = styled.img<StyledAppMenuHeaderLogoProps>`
  position: relative;
  width: auto;
  opacity: 1;
  left: 0;

  ${({ $collapsed, theme }) => {
    const tokens = theme.cmp.appMenu.logo;
    return css`
      max-height: ${tokens.size.maxHeight};
      transition:
        opacity ${tokens.mutation.transitionDuration.opacity} ease-in-out,
        width ${tokens.mutation.transitionDuration.width} ease-in-out,
        left ${tokens.mutation.transitionDuration.width} ease-in-out;

      ${$collapsed &&
      css`
        opacity: 0;
        left: 100%;
        width: 0;
      `}
    `;
  }};
`;
