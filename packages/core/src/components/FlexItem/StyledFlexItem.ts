import styled, { css } from 'styled-components';
import { LayoutFlexItemProps } from '../../declarations';
import { Box, BoxProps } from '../Box';

export interface StyledFlexItemProps extends BoxProps, LayoutFlexItemProps {}

export const StyledFlexItem = styled(Box)<StyledFlexItemProps>`
  ${({ alignSelf, flex, order }) => css`
    flex: ${flex};
    align-self: ${alignSelf};
    order: ${order};
  `};
`;
