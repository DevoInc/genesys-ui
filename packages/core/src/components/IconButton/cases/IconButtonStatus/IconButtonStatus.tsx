import * as React from 'react';
import { concat } from 'lodash';
import { useTheme } from 'styled-components';

import { ICON_BUTTON_REDUCED_SIZE_PROP_MAP } from '../../constants';

import type { ButtonExpandableState } from '../../../Button';
import type { UIColorScheme } from '../../../../declarations';

import { iconButtonStatusMixin } from './mixins';
import { getIconButtonStatusIcon } from './utils';

import { IconButton, type IconButtonProps } from '../../IconButton';

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
  colorScheme?: UIColorScheme;
  state?: ButtonExpandableState;
}

export const IconButtonStatus = React.forwardRef<
  HTMLElement,
  IconButtonStatusProps
>(
  (
    {
      colorScheme = 'help',
      icon,
      size = 'md',
      state = 'enabled',
      styles,
      ...restIconButtonProps
    },
    ref,
  ) => {
    const theme = useTheme();
    return (
      <IconButton
        {...restIconButtonProps}
        colorScheme={colorScheme}
        icon={icon || getIconButtonStatusIcon(colorScheme)}
        circular
        ref={ref}
        size={ICON_BUTTON_REDUCED_SIZE_PROP_MAP[size]}
        state={state}
        styles={concat(
          iconButtonStatusMixin({ state, colorScheme, theme }),
          styles,
        )}
      />
    );
  },
);

IconButtonStatus.displayName = 'IconButtonStatus';
