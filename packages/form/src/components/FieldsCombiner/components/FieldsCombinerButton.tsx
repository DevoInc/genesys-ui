import * as React from 'react';
import { concat } from 'lodash';

import { Button, ButtonProps, UIColorScheme } from '@devoinc/genesys-ui';

import { fieldsCombinerButtonMixin } from '../helpers';
import { FieldsCombinerElemContext } from '../context';
import { FieldsCombiner } from '../FieldsCombiner';
import { FieldsCombinerItemProps } from './FieldsCombinerItem';

export interface FieldsCombinerButtonProps extends Omit<ButtonProps, 'size'> {
  width?: FieldsCombinerItemProps['width'];
}

export const FieldsCombinerButton = React.forwardRef<
  HTMLButtonElement,
  FieldsCombinerButtonProps
>(({ colorScheme, styles, width, ...restButtonProps }, ref) => {
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
      <Button
        {...restButtonProps}
        ref={ref}
        colorScheme={
          colorScheme ||
          (status !== 'base' ? (status as UIColorScheme) : 'neutral')
        }
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

FieldsCombinerButton.displayName = 'FieldsCombinerButton';
