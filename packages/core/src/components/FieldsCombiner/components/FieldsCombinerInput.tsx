import * as React from 'react';
import { concat } from 'lodash';

import { InputControl, type InputControlProps } from '../../InputControl';

import { fieldsCombinerInputAndSelectMixin } from '../helpers';
import { FieldsCombinerElemContext } from '../context';

import {
  FieldsCombinerItem,
  type FieldsCombinerItemProps,
} from './FieldsCombinerItem';
import { FieldProps } from '../../Field';

export interface FieldsCombinerInputProps
  extends Omit<InputControlProps, 'size'> {
  width?: FieldsCombinerItemProps['width'];
  size?: FieldProps['size'];
}

export const FieldsCombinerInput: React.FC<FieldsCombinerInputProps> = ({
  'aria-label': ariaLabel,
  styles,
  width,
  ...restInputControlProps
}) => {
  const { order, size, status, theme } = React.useContext(
    FieldsCombinerElemContext,
  );
  return (
    <FieldsCombinerItem
      componentType="field"
      size={size}
      order={order}
      status={status}
      width={width}
    >
      <InputControl._Input
        {...restInputControlProps}
        aria-label={ariaLabel}
        status={status}
        styles={concat(
          fieldsCombinerInputAndSelectMixin({
            order,
            size,
            theme,
          }),
          styles,
        )}
      />
    </FieldsCombinerItem>
  );
};
