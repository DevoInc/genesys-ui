import * as React from 'react';

import { Button, type ButtonProps } from '../../../Button';
import type { TUIColorScheme } from '../../../../declarations';
import { fieldsCombinerButtonMixin } from '../../helpers';
import { FieldsCombinerElemContext } from '../../context';
import {
  FieldsCombinerItem,
  type FieldsCombinerItemProps,
} from '../FieldsCombinerItem';
import { mergeStyles } from '../../../../helpers';

export interface FieldsCombinerButtonProps extends Omit<ButtonProps, 'size'> {
  width?: FieldsCombinerItemProps['width'];
}

export const FieldsCombinerButton = React.forwardRef<
  HTMLButtonElement,
  FieldsCombinerButtonProps
>(({ colorScheme, style, width, ...restButtonProps }, ref) => {
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
        style={mergeStyles(
          fieldsCombinerButtonMixin({
            combinedButtons,
            order,
            size,
            status,
            theme,
          }),
          style,
        )}
      />
    </FieldsCombinerItem>
  );
});

FieldsCombinerButton.displayName = 'FieldsCombinerButton';
