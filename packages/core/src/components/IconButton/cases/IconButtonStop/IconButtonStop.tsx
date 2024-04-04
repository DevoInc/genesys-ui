import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';
import { GIStopSquare } from '@devoinc/genesys-icons';

import type { TButtonActionState } from '../../../Button';

import { IconButton, type IconButtonProps } from '../../IconButton';

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
  state?: TButtonActionState;
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
      icon={
        <GIStopSquare
          color={
            state !== 'disabled' && theme.cmp.iconButtonStop.icon.color.text
          }
        />
      }
      ref={ref}
      size={size}
      state={state}
      styles={concat(iconButtonStopMixin({ size, state, theme }), styles)}
    />
  );
});

IconButtonStop.displayName = 'IconButtonStop';
