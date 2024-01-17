import * as React from 'react';
import { concat } from 'lodash';

import {
  IconButton,
  IconButtonProps,
  UIColorScheme,
} from '@devoinc/genesys-ui';

import { fieldsCombinerButtonMixin } from '../helpers';
import { FieldsCombinerElemContext } from '../context';
import { FieldsCombiner } from '../FieldsCombiner';
import { FieldsCombinerItemProps } from './FieldsCombinerItem';

export interface FieldsCombinerIconButtonProps
  extends Omit<IconButtonProps, 'size'> {
  width?: FieldsCombinerItemProps['width'];
}

export const FieldsCombinerIconButton = React.forwardRef<
  HTMLButtonElement,
  FieldsCombinerIconButtonProps
>(({ colorScheme, styles, width, ...restIconButtonProps }, ref) => {
  const { combinedButtons, order, size, status, theme } = React.useContext(
    FieldsCombinerElemContext,
  );
  return (
    <FieldsCombiner.Item
      componentType="button"
      size={size}
      order={order}
      status={status}
      width={width}
    >
      <IconButton
        {...restIconButtonProps}
        colorScheme={
          colorScheme ||
          (status !== 'base' ? (status as UIColorScheme) : 'neutral')
        }
        ref={ref}
        styles={concat(
          fieldsCombinerButtonMixin({
            combinedButtons,
            order,
            size,
            status,
            theme,
          }),
          styles,
        )}
      />
    </FieldsCombiner.Item>
  );
});

FieldsCombinerIconButton.displayName = 'FieldsCombinerIconButton';
