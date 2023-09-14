import styled, { css } from 'styled-components';

import { getSpacingPropCss } from '../../../../utils/spacing';
import { boxMixin, BoxMixinProps } from '../../../../styled/';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledAppBarContainerProps
  extends Omit<BoxMixinProps, '$display' | 'theme'> {}

export const StyledAppBarContainer = styled.div<StyledAppBarContainerProps>`
  ${({ theme, ...boxMixinProps }) => {
    console.info(boxMixinProps.elevation);
    return css`
      ${boxMixin(theme)(boxMixinProps)}
      position: relative;
      padding-left: ${getSpacingPropCss(theme)('cmp-md')};
      padding-right: ${getSpacingPropCss(theme)('cmp-md')};
      background-color: ${theme.cmp.appBar.color.background};
    `;
  }}
`;
