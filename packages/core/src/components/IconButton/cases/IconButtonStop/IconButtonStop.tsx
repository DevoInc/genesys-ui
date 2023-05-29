import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import { ButtonActionState } from '../../../Button';

import { IconButton, IconButtonProps } from '../../';

import { iconButtonStopMixin } from './helpers';

export interface IconButtonStopProps
  extends Omit<
    IconButtonProps,
    | 'aria-expanded'
    | 'aria-haspopup'
    | 'aria-selected'
    | 'as'
    | 'autoFocus'
    | 'children'
    | 'colorScheme'
    | 'download'
    | 'form'
    | 'formAction'
    | 'href'
    | 'icon'
    | 'hasBoldIcon'
    | 'wide'
    | 'onChange'
    | 'rel'
    | 'selectionScheme'
    | 'target'
    | 'value'
  > {
  state?: ButtonActionState;
}

export const IconButtonStop = React.forwardRef<
  HTMLElement,
  IconButtonStopProps
>(({ size = 'md', state = 'enabled', styles, ...restIconButtonProps }, ref) => {
  const theme = useTheme();
  return (
    <IconButton
      {...restIconButtonProps}
      colorScheme="neutral"
      icon="gi-stop_square"
      ref={ref}
      size={size}
      state={state}
      styles={concat(iconButtonStopMixin({ size, state, theme }), styles)}
    />
  );
});

IconButtonStop.displayName = 'IconButtonStop';
