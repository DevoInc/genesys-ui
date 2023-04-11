import * as React from 'react';

import { FlexItem } from './subcomponents';
import { CommonBoxProps } from '../Box';
import { StyledFlex, StyledFlexProps } from './StyledFlex';

export interface FlexProps extends CommonBoxProps, StyledFlexProps {
  children?: React.ReactNode;
}

const InternalFlex: React.FC<FlexProps> = ({ children, ...styledProps }) => {
  return <StyledFlex {...styledProps}>{children}</StyledFlex>;
};

export const Flex = InternalFlex as typeof InternalFlex & {
  Item: typeof FlexItem;
};

Flex.Item = FlexItem;
