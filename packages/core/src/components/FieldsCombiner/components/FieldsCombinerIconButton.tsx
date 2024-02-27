import * as React from 'react';
import { concat } from 'lodash';

import { IconButton, type IconButtonProps } from '../../IconButton';
import type { UIColorScheme } from '../../../declarations';

import { fieldsCombinerButtonMixin } from '../helpers';
import { FieldsCombinerElemContext } from '../context';
import {
  FieldsCombinerItem,
  type FieldsCombinerItemProps,
} from './FieldsCombinerItem';

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
    <FieldsCombinerItem
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
    </FieldsCombinerItem>
  );
});

FieldsCombinerIconButton.displayName = 'FieldsCombinerIconButton';
