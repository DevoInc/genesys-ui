import styled, { css } from 'styled-components';

import { LayoutFlexItemProps } from '../../../../declarations';
import { boxMixin, BoxMixinProps } from '../../../../styled/';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledFlexItemProps
  extends BoxMixinProps,
    LayoutFlexItemProps {}

export const StyledFlexItem = styled.div<StyledFlexItemProps>`
  ${({ alignSelf, order, ...boxMixinProps }) => css`
    ${boxMixin({ ...boxMixinProps })};
    align-self: ${alignSelf};
    order: ${order};
  `};
`;
