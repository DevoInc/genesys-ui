import styled, { css } from 'styled-components';

import { LayoutFlexItemProps } from '../../../../declarations';
import { boxMixin, BoxMixinProps } from '../../../../styled/';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledFlexItemProps
  extends Omit<BoxMixinProps, '$display' | '$height' | '$width' | 'theme'>,
    LayoutFlexItemProps {}

export const StyledFlexItem = styled.div<StyledFlexItemProps>`
  ${({ alignSelf, order, theme, ...boxMixinProps }) => css`
    ${boxMixin(theme)(boxMixinProps)};
    align-self: ${alignSelf};
    order: ${order};
  `};
`;
