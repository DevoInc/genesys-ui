import * as React from 'react';
import { concat } from 'lodash';

import { ICON_BUTTON_REDUCED_SIZE_PROP_MAP } from '../../constants';

import { IconButton, IconButtonProps } from '../../IconButton';
import { GIExitClose } from '@devoinc/genesys-icons';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
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
>(({ size = 'md', state = 'enabled', styles, ...restIconButtonProps }, ref) => {
  return (
    <IconButton
      {...restIconButtonProps}
      colorScheme="blend-base"
      icon={<GIExitClose />}
      circular
      hasBoldIcon
      ref={ref}
      size={ICON_BUTTON_REDUCED_SIZE_PROP_MAP[size]}
      state={state}
      styles={concat('background-color: transparent;', styles)}
    />
  );
});

IconButtonClose.displayName = 'IconButtonClose';
