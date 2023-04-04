import * as React from 'react';

import { StyledFlexItem, StyledFlexItemProps } from './StyledFlexItem';
import { CommonBoxProps } from '../Box';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FlexItemProps extends CommonBoxProps, StyledFlexItemProps {}

export const FlexItem: React.FC<FlexItemProps> = ({
  children,
  ...styledProps
}) => {
  return <StyledFlexItem {...styledProps}>{children}</StyledFlexItem>;
};
