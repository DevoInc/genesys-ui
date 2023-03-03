import * as React from 'react';
import { StyledFlex, StyledFlexProps } from './StyledFlex';

export interface FlexProps extends StyledFlexProps {
  children?: React.ReactNode;
}

export const Flex: React.FC<FlexProps> = ({ children, ...styledProps }) => {
  return <StyledFlex {...styledProps}>{children}</StyledFlex>;
};
