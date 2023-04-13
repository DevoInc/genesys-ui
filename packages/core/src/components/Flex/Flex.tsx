import * as React from 'react';

import { FlexItem } from './subcomponents';
import { CommonBoxProps } from '../Box';
import { StyledFlex, StyledFlexProps } from './StyledFlex';

export interface FlexProps
  extends CommonBoxProps,
    Omit<StyledFlexProps, '$width' | '$height'> {
  children?: React.ReactNode;
}

export const InternalFlex: React.FC<FlexProps> = ({
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

export const Flex = InternalFlex as typeof InternalFlex & {
  Item: typeof FlexItem;
};

Flex.Item = FlexItem;
