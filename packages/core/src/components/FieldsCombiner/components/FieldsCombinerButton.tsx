import * as React from 'react';
import { concat } from 'lodash';

import { Button, type ButtonProps } from '../../Button';
import type { TUIColorScheme } from '../../../declarations';

import { fieldsCombinerButtonMixin } from '../helpers';
import { FieldsCombinerElemContext } from '../context';
import {
  FieldsCombinerItem,
  type FieldsCombinerItemProps,
} from './FieldsCombinerItem';

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
    <FieldsCombinerItem
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
          (status !== 'base' ? (status as TUIColorScheme) : 'neutral')
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
    </FieldsCombinerItem>
  );
});

FieldsCombinerButton.displayName = 'FieldsCombinerButton';
