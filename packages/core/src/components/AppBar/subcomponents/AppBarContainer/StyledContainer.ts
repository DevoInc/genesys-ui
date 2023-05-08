import styled, { css } from 'styled-components';

import { getSpacingPropCss } from '../../../../utils/spacing';
import { boxMixin, BoxMixinProps } from '../../../../styled/';

export interface StyledAppBarContainerProps
  extends Omit<BoxMixinProps, '$display'> {}

export const StyledAppBarContainer = styled.div<StyledAppBarContainerProps>`
  ${({ theme, ...boxMixinProps }) => {
    return css`
      ${boxMixin({ theme, ...boxMixinProps })}
      position: relative;
      padding-left: ${getSpacingPropCss('cmp-md', theme)};
      padding-right: ${getSpacingPropCss('cmp-md', theme)};
      background-color: ${theme.cmp.appBar.color.background};
    `;
  }}
`;
