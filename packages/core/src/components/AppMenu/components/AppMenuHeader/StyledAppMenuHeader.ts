import styled, { css } from 'styled-components';
import type { TAppMenuCollapsed } from '../../declarations';

interface StyledAppMenuHeaderProps {
  $collapsed?: TAppMenuCollapsed;
  $hasScroll?: boolean;
}

export const StyledAppMenuHeader = styled.div<StyledAppMenuHeaderProps>`
  flex: 0 0 auto;
  display: flex;
  align-items: center;

  ${({ $collapsed, $hasScroll, theme }) => {
    const tokens = theme.cmp.appMenu.header;
    return css`
      box-shadow: ${$hasScroll && tokens.elevation.boxShadow.hasScroll};
      border-bottom: ${tokens.shape.borderBottom};
      height: ${tokens.size.height};
      padding: ${`0 ${tokens.space.paddingRight[$collapsed ? 'collapsed' : 'base']} 0 ${tokens.space.paddingLeft[$collapsed ? 'collapsed' : 'base']}`};
    `;
  }}
`;
