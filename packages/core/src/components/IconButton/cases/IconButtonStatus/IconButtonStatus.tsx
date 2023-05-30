import * as React from 'react';
import { useTheme } from 'styled-components';

import { ICON_BUTTON_REDUCED_SIZE_PROP_MAP } from '../../constants';
import { ButtonExpandableState } from '../../../Button';
import {
  ICON_BUTTON_STATUS_ICON_PROP_MAP,
  IconButtonStatusColorScheme,
} from './constants';

import { iconButtonStatusMixin } from './helpers';

import { IconButton, IconButtonProps } from '../../';
import { concat } from 'lodash';

export interface IconButtonStatusProps
  extends Omit<
    IconButtonProps,
    | 'aria-selected'
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
      styles,
      ...restIconButtonProps
    },
    ref
  ) => {
    const theme = useTheme();
    return (
      <IconButton
        {...restIconButtonProps}
        colorScheme={colorScheme}
        icon={icon}
        circular
        ref={ref}
        size={ICON_BUTTON_REDUCED_SIZE_PROP_MAP[size]}
        state={state}
        styles={concat(
          iconButtonStatusMixin({ state, colorScheme, theme }),
          styles
        )}
      />
    );
  }
);

IconButtonStatus.displayName = 'IconButtonStatus';
