import * as React from 'react';

import { GIExitClose } from '@devoinc/genesys-icons';

import { ICON_BUTTON_REDUCED_SIZE_PROP_MAP } from '../../constants';
import { IconButton, type IconButtonProps } from '../../IconButton';
import { mergeStyles } from '../../../../helpers';

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
  > {}

export const IconButtonClose = React.forwardRef<
  HTMLElement,
  IconButtonCloseProps
>(({ size = 'md', state = 'enabled', style, ...restIconButtonProps }, ref) => (
  <IconButton
    {...restIconButtonProps}
    colorScheme="blend-base"
    icon={<GIExitClose />}
    circular
    hasBoldIcon
    ref={ref}
    size={ICON_BUTTON_REDUCED_SIZE_PROP_MAP[size]}
    state={state}
    style={mergeStyles({ backgroundColor: 'transparent' }, style)}
  />
));

IconButtonClose.displayName = 'IconButtonClose';
