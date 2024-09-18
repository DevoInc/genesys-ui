import * as React from 'react';

import { SelectControl, type SelectControlProps } from '../../../SelectControl';
import { fieldsCombinerInputAndSelectMixin } from '../../helpers';
import { FieldsCombinerElemContext } from '../../context';
import {
  FieldsCombinerItem,
  FieldsCombinerItemProps,
} from '../FieldsCombinerItem/FieldsCombinerItem';
import { mergeStyles } from '../../../../helpers';

export interface FieldsCombinerSelectProps
  extends Omit<SelectControlProps, 'size'> {
  width?: FieldsCombinerItemProps['width'];
}

export const FieldsCombinerSelect: React.FC<FieldsCombinerSelectProps> = ({
  style,
  width,
  ...restSelectControlProps
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
      <SelectControl
        {...restSelectControlProps}
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
