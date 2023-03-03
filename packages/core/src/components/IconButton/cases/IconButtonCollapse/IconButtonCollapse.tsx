import * as React from 'react';

import { ButtonExpandableState } from '../../../Button';
import { ICON_BUTTON_REDUCED_SIZE_PROP_MAP } from '../../constants';

import { IconButton, IconButtonProps } from '../../';

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
  state: ButtonExpandableState;
}

export const IconButtonCollapse = React.forwardRef<
  HTMLElement,
  IconButtonCollapseProps
>(({ size = 'md', state = 'enabled', ...restIconButtonProps }, ref) => {
  return (
    <IconButton
      {...restIconButtonProps}
      colorScheme={'blend-base'}
      circular
      hasDropdown
      ref={ref}
      size={ICON_BUTTON_REDUCED_SIZE_PROP_MAP[size]}
      state={state}
    />
  );
});

IconButtonCollapse.displayName = 'IconButtonCollapse';
