import * as React from 'react';

import { ICON_BUTTON_REDUCED_SIZE_PROP_MAP } from '../../constants';
import { ButtonExpandableState } from '../../../Button';
import {
  ICON_BUTTON_STATUS_ICON_PROP_MAP,
  IconButtonStatusColorScheme,
} from './constants';

import { IconButton, IconButtonProps } from '../../';

import { StyledIconButtonStatus } from './StyledIconButtonStatus';

export interface IconButtonStatusProps
  extends Omit<
    IconButtonProps,
    | 'aria-selected'
    | 'as'
    | 'autoFocus'
    | 'children'
    | 'download'
    | 'form'
    | 'formAction'
    | 'href'
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
  colorScheme?: IconButtonStatusColorScheme;
  state?: ButtonExpandableState;
}

export const IconButtonStatus = React.forwardRef<
  HTMLElement,
  IconButtonStatusProps
>(
  (
    {
      colorScheme = 'help',
      icon = ICON_BUTTON_STATUS_ICON_PROP_MAP[colorScheme],
      size = 'md',
      state = 'enabled',
      ...restIconButtonProps
    },
    ref
  ) => (
    <IconButton
      {...restIconButtonProps}
      as={StyledIconButtonStatus}
      colorScheme={colorScheme}
      icon={icon}
      circular
      ref={ref}
      size={ICON_BUTTON_REDUCED_SIZE_PROP_MAP[size]}
      state={state}
    />
  )
);

IconButtonStatus.displayName = 'IconButtonStatus';
