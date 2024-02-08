import * as React from 'react';

import {
  StyledFieldsCombinerItem,
  StyledFieldsCombinerItemProps,
} from './StyledFieldsCombinerItem';
import { FieldsCombinerType } from '../declarations';

export interface FieldsCombinerItemProps
  extends Omit<StyledFieldsCombinerItemProps, '$order' | '$width'> {
  children: React.ReactNode;
  componentType: FieldsCombinerType;
  width?: StyledFieldsCombinerItemProps['$width'];
  order?: StyledFieldsCombinerItemProps['$order'];
}

export const FieldsCombinerItem: React.FC<FieldsCombinerItemProps> = ({
  children,
  combinedButtons,
  size,
  order,
  componentType,
  status,
  width,
}) => {
  return (
    <StyledFieldsCombinerItem
      combinedButtons={combinedButtons}
      componentType={componentType}
      size={size}
      $order={order}
      status={status}
      $width={width}
    >
      {children}
    </StyledFieldsCombinerItem>
  );
};
