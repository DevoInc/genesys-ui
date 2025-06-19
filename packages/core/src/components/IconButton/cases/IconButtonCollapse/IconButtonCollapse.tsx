import * as React from 'react';

import type { Resolve } from '../../../../typeFunctions';
import { ICON_BUTTON_REDUCED_SIZE_PROP_MAP } from '../../constants';
import {
  TBlendColorScheme,
  TNeutralColorScheme,
} from '../../../../declarations';
import type { TButtonExpandableState } from '../../../Button';
import { IconButton, type IconButtonProps } from '../../IconButton';

export interface IconButtonCollapseProps
  extends Omit<
    IconButtonProps,
    | 'aria-haspopup'
    | 'aria-selected'
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
  state: TButtonExpandableState;
  colorScheme?: TBlendColorScheme | TNeutralColorScheme;
}

export const IconButtonCollapse = React.forwardRef<
  HTMLButtonElement,
  Resolve<IconButtonCollapseProps>
>(
  (
    {
      colorScheme = 'blend-base',
      size = 'md',
      state = 'enabled',
      ...restIconButtonProps
    },
    ref,
  ) => (
    <IconButton
      {...restIconButtonProps}
      ref={ref}
      colorScheme={colorScheme}
      circular
      hasDropdown
      size={ICON_BUTTON_REDUCED_SIZE_PROP_MAP[size]}
      state={state}
    />
  ),
);
