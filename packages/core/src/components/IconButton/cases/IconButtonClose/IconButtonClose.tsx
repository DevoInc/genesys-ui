import * as React from 'react';

import { GIExitClose } from '@devoinc/genesys-icons';

import { ICON_BUTTON_REDUCED_SIZE_PROP_MAP } from '../../constants';
import type {
  TBlendColorScheme,
  TNeutralColorScheme,
} from '../../../../declarations';
import { IconButton, type IconButtonProps } from '../../IconButton';
import { mergeStyles } from '../../../../helpers';
import type { Resolve } from '../../../../typeFunctions';

export interface IconButtonCloseProps
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
    | 'circular'
    | 'hasDropdown'
    | 'hasBoldIcon'
    | 'wide'
    | 'onChange'
    | 'rel'
    | 'selectionScheme'
    | 'target'
    | 'value'
  > {
  colorScheme?: TBlendColorScheme | TNeutralColorScheme;
}

export const IconButtonClose = React.forwardRef<
  HTMLButtonElement,
  Resolve<IconButtonCloseProps>
>(
  (
    {
      colorScheme = 'neutral',
      size = 'md',
      state = 'enabled',
      style,
      ...restIconButtonProps
    },
    ref,
  ) => (
    <IconButton
      {...restIconButtonProps}
      ref={ref}
      colorScheme={colorScheme}
      icon={<GIExitClose />}
      circular
      hasBoldIcon
      size={ICON_BUTTON_REDUCED_SIZE_PROP_MAP[size]}
      state={state}
      style={mergeStyles({ backgroundColor: 'transparent' }, style)}
    />
  ),
);
