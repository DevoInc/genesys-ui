import * as React from 'react';

import { IconButton, type IconButtonProps } from '../../../IconButton';
import type { TUIColorScheme } from '../../../../declarations';
import { fieldsCombinerButtonMixin } from '../../helpers';
import { FieldsCombinerElemContext } from '../../context';
import {
  FieldsCombinerItem,
  type FieldsCombinerItemProps,
} from '../FieldsCombinerItem';
import { mergeStyles } from '../../../../helpers';
import type { Resolve } from '../../../../typeFunctions';

export interface FieldsCombinerIconButtonProps
  extends Omit<IconButtonProps, 'size'> {
  width?: FieldsCombinerItemProps['width'];
}

export const FieldsCombinerIconButton: React.FC<
  Resolve<FieldsCombinerIconButtonProps>
> = ({ colorScheme, style, width, ...restIconButtonProps }) => {
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
