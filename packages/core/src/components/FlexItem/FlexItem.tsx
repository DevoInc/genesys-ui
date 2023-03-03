import * as React from 'react';

import { StyledFlexItem, StyledFlexItemProps } from './StyledFlexItem';

export interface FlexItemProps extends StyledFlexItemProps {
  /** Children */
  children?: React.ReactNode;
}

export const FlexItem: React.FC<FlexItemProps> = ({
  children,
  ...styledProps
}) => {
  return <StyledFlexItem {...styledProps}>{children}</StyledFlexItem>;
};
