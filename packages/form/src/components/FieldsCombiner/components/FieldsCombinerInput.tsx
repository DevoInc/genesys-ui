import * as React from 'react';
import { concat } from 'lodash';

import { InputControl, InputControlProps } from '@devoinc/genesys-ui';

import { fieldsCombinerInputAndSelectMixin } from '../helpers';
import { FieldsCombinerElemContext } from '../context';
import { FieldsCombiner } from '../FieldsCombiner';
import { FieldsCombinerItemProps } from './FieldsCombinerItem';

export interface FieldsCombinerInputProps
  extends Omit<InputControlProps, 'size'> {
  width?: FieldsCombinerItemProps['width'];
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
    <FieldsCombiner.Item
      componentType="field"
      size={size}
      order={order}
      status={status}
      width={width}
    >
      <InputControl.Input
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
    </FieldsCombiner.Item>
  );
};
