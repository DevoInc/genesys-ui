import * as React from 'react';

import { CheckboxControl, CheckboxControlProps } from '@devoinc/genesys-ui';

import { FieldsCombinerElemContext } from '../context';

import { FieldsCombiner } from '../FieldsCombiner';
import { FieldsCombinerItemProps } from './FieldsCombinerItem';

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
    <FieldsCombiner.Item
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
    </FieldsCombiner.Item>
  );
};
