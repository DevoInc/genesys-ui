import * as React from 'react';
import { concat } from 'lodash';

import { SelectControl, SelectControlProps } from '@devoinc/genesys-ui';

import { fieldsCombinerInputAndSelectMixin } from '../helpers';
import { FieldsCombinerElemContext } from '../context';
import { FieldsCombiner } from '../FieldsCombiner';
import { FieldsCombinerItemProps } from './FieldsCombinerItem';

export interface FieldsCombinerSelectProps
  extends Omit<SelectControlProps, 'size'> {
  width?: FieldsCombinerItemProps['width'];
}

export const FieldsCombinerSelect: React.FC<FieldsCombinerSelectProps> = ({
  styles,
  width,
  ...restSelectControlProps
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
      <SelectControl
        {...restSelectControlProps}
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
