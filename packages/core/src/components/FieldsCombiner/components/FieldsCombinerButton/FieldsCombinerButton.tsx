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
import type { Resolve } from '../../../../typeFunctions';

export interface FieldsCombinerButtonProps extends Omit<ButtonProps, 'size'> {
  width?: FieldsCombinerItemProps['width'];
}

export const FieldsCombinerButton: React.FC<
  Resolve<FieldsCombinerButtonProps>
> = ({ colorScheme, style, width, ...restButtonProps }) => {
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
};
