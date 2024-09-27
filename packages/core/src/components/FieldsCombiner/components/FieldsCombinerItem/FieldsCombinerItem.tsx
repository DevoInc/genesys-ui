import * as React from 'react';

import { StyledFieldsCombinerItem } from './StyledFieldsCombinerItem';
import { IFieldsCombinerItem } from './declarations';

export interface FieldsCombinerItemProps extends IFieldsCombinerItem {
  children: React.ReactNode;
}

export const FieldsCombinerItem: React.FC<FieldsCombinerItemProps> = ({
  children,
  combinedButtons,
  size,
  order,
  componentType,
  status,
  width,
}) => (
  <StyledFieldsCombinerItem
    $combinedButtons={combinedButtons}
    $componentType={componentType}
    $size={size}
    $order={order}
    $status={status}
    $width={width}
  >
    {children}
  </StyledFieldsCombinerItem>
);
