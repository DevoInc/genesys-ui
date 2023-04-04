import * as React from 'react';
import { CommonBoxProps } from '../Box';
import { StyledFlex, StyledFlexProps } from './StyledFlex';

export interface FlexProps extends CommonBoxProps, StyledFlexProps {
  children?: React.ReactNode;
}

export const Flex: React.FC<FlexProps> = ({ children, ...styledProps }) => {
  return <StyledFlex {...styledProps}>{children}</StyledFlex>;
};
