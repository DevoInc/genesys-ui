import * as React from 'react';
import { GIExitClose } from '@devoinc/genesys-icons';

import { ICON_BUTTON_REDUCED_SIZE_PROP_MAP } from '../../constants';

import { IconButton, IconButtonProps } from '../../IconButton';

import { ButtonBasicState } from '../../../Button/declarations';

export interface IconButtonRemoveProps
  extends Omit<
    IconButtonProps,
    | 'aria-expanded'
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
  state?: ButtonBasicState;
}

export const IconButtonRemove = React.forwardRef<
  HTMLElement,
  IconButtonRemoveProps
>(({ size = 'md', state = 'enabled', ...restIconButtonProps }, ref) => (
  <IconButton
    {...restIconButtonProps}
    colorScheme={'blend-base'}
    icon={<GIExitClose />}
    circular
    hasBoldIcon
    ref={ref}
    size={ICON_BUTTON_REDUCED_SIZE_PROP_MAP[size]}
    state={state}
  />
));

IconButtonRemove.displayName = 'IconButtonRemove';
