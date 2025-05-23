import styled, { css } from 'styled-components';
import type { TAppMenuCollapsed } from '../../declarations';

interface StyledAppMenuHeadingProps {
  $collapsed?: TAppMenuCollapsed;
}

export const StyledAppMenuHeading = styled.li<StyledAppMenuHeadingProps>`
  list-style: none;
  position: relative;
  display: inline-flex;
  align-items: center;

  ${({ $collapsed, theme }) => {
    const tokens = theme.cmp.appMenu.heading;
    return css`
      height: ${tokens.size.height};
      padding: ${`0
      ${tokens.space.paddingRight[$collapsed ? 'collapsed' : 'base']}
      0
      ${tokens.space.paddingLeft[$collapsed ? 'collapsed' : 'base']}`};
      transition: padding ${tokens.mutation.transitionDuration.padding} ease-out;
    `;
  }}

  &:first-of-type {
    padding-top: 0;
  }
`;
