import * as React from 'react';

import { InputControl, type InputControlProps } from '../../../InputControl';
import { fieldsCombinerInputAndSelectMixin } from '../../helpers';
import { FieldsCombinerElemContext } from '../../context';
import {
  FieldsCombinerItem,
  type FieldsCombinerItemProps,
} from '../FieldsCombinerItem';
import { FieldProps } from '../../../Field';
import { mergeStyles } from '../../../../helpers';

export interface FieldsCombinerInputProps
  extends Omit<InputControlProps, 'size'> {
  width?: FieldsCombinerItemProps['width'];
  size?: FieldProps['size'];
}

export const FieldsCombinerInput: React.FC<FieldsCombinerInputProps> = ({
  'aria-label': ariaLabel,
  style,
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
        style={mergeStyles(
          fieldsCombinerInputAndSelectMixin({
            order,
            size,
            theme,
          }),
          style,
        )}
      />
    </FieldsCombinerItem>
  );
};
