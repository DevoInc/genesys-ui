import * as React from 'react';

import { ICON_BUTTON_REDUCED_SIZE_PROP_MAP } from '../../constants';
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
}

export const IconButtonCollapse = React.forwardRef<
  HTMLElement,
  IconButtonCollapseProps
>(({ size = 'md', state = 'enabled', ...restIconButtonProps }, ref) => (
  <IconButton
    {...restIconButtonProps}
    colorScheme={'blend-base'}
    circular
    hasDropdown
    ref={ref}
    size={ICON_BUTTON_REDUCED_SIZE_PROP_MAP[size]}
    state={state}
  />
));

IconButtonCollapse.displayName = 'IconButtonCollapse';
