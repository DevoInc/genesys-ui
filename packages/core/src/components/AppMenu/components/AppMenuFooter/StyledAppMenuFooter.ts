import styled, { css } from 'styled-components';
import { getSpacingPropCss } from '../../../../helpers';

interface StyledAppMenuFooterProps {
  $hasScroll?: boolean;
}

export const StyledAppMenuFooter = styled.div<StyledAppMenuFooterProps>`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  ${({ $hasScroll, theme }) => {
    const tokens = theme.cmp.appMenu.footer;
    return css`
      box-shadow: ${$hasScroll && tokens.elevation.boxShadow.hasScroll};
      border-top: ${tokens.shape.borderTop};
      padding: ${getSpacingPropCss(theme)('cmp-xs')} 0;
    `;
  }}
`;
