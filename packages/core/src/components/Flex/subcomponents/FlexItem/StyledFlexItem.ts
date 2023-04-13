import styled, { css } from 'styled-components';

import { LayoutFlexItemProps } from '../../../../declarations';
import { StyledBox, StyledBoxProps } from '../../../Box/StyledBox';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledFlexItemProps
  extends StyledBoxProps,
    LayoutFlexItemProps {}

export const StyledFlexItem = styled(StyledBox)<StyledFlexItemProps>`
  ${({ alignSelf, flex, order }) => css`
    flex: ${flex};
    align-self: ${alignSelf};
    order: ${order};
  `};
`;
