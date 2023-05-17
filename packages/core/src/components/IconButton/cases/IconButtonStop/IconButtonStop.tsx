import * as React from 'react';

import { ButtonActionState } from '../../../Button';

import { IconButton, IconButtonProps } from '../../';

import { StyledIconButtonStop } from './StyledIconButtonStop';

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
>(({ size = 'md', state = 'enabled', ...restIconButtonProps }, ref) => (
  <IconButton
    {...restIconButtonProps}
    as={StyledIconButtonStop}
    colorScheme="neutral"
    icon="gi-stop_square"
    ref={ref}
    size={size}
    state={state}
  />
));

IconButtonStop.displayName = 'IconButtonStop';
