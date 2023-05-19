import * as React from 'react';

import { ICON_BUTTON_REDUCED_SIZE_PROP_MAP } from '../../constants';

import { IconButton, IconButtonProps } from '../../';

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
      icon="gi-exit_close"
      circular
      hasBoldIcon
      ref={ref}
      size={ICON_BUTTON_REDUCED_SIZE_PROP_MAP[size]}
      state={state}
      styles={styles || 'background-color: transparent;'}
    />
  );
});

IconButtonClose.displayName = 'IconButtonClose';
