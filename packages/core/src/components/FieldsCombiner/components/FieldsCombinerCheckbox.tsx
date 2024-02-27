import * as React from 'react';

import {
  CheckboxControl,
  type CheckboxControlProps,
} from '../../CheckboxControl';

import { FieldsCombinerElemContext } from '../context';

import {
  FieldsCombinerItem,
  type FieldsCombinerItemProps,
} from './FieldsCombinerItem';

export interface FieldsCombinerCheckboxProps
  extends Omit<CheckboxControlProps, 'size'> {
  width?: FieldsCombinerItemProps['width'];
}

export const FieldsCombinerCheckbox: React.FC<FieldsCombinerCheckboxProps> = ({
  'aria-label': ariaLabel,
  width,
  ...restCheckboxControlProps
}) => {
  const { order, size, status } = React.useContext(FieldsCombinerElemContext);
  return (
    <FieldsCombinerItem
      componentType="check"
      size={size}
      order={order}
      status={status}
      width={width}
    >
      <CheckboxControl
        {...restCheckboxControlProps}
        aria-label={ariaLabel}
        status={status}
      />
    </FieldsCombinerItem>
  );
};
