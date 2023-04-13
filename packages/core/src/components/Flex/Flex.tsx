import * as React from 'react';
import { CommonBoxProps } from '../Box';
import { StyledFlex, StyledFlexProps } from './StyledFlex';

export interface FlexProps
  extends CommonBoxProps,
    Omit<StyledFlexProps, '$width' | '$height'> {
  children?: React.ReactNode;
}

export const Flex: React.FC<FlexProps> = ({
  children,
  width,
  height,
  ...styledProps
}) => {
  return (
    <StyledFlex {...styledProps} $height={height} $width={width}>
      {children}
    </StyledFlex>
  );
};
