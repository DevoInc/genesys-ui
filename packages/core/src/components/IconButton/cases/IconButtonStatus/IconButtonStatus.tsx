import * as React from 'react';
import { useTheme } from 'styled-components';

import type { Resolve } from '../../../../typeFunctions';
import { ICON_BUTTON_REDUCED_SIZE_PROP_MAP } from '../../constants';
import type { TButtonExpandableState } from '../../../Button';
import type { TUIColorScheme } from '../../../../declarations';
import { iconButtonStatusMixin } from './mixins';
import { getIconButtonStatusIcon } from './utils';
import { IconButton, type IconButtonProps } from '../../IconButton';
import { mergeStyles } from '../../../../helpers';

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
  colorScheme?: TUIColorScheme;
  state?: TButtonExpandableState;
}

export const IconButtonStatus: React.FC<Resolve<IconButtonStatusProps>> = ({
  colorScheme = 'help',
  icon,
  size = 'md',
  state = 'enabled',
  style,
  ...restIconButtonProps
}) => {
  const theme = useTheme();
  return (
    <IconButton
      {...restIconButtonProps}
      colorScheme={colorScheme}
      icon={icon || getIconButtonStatusIcon(colorScheme)}
      circular
      size={ICON_BUTTON_REDUCED_SIZE_PROP_MAP[size]}
      state={state}
      style={mergeStyles(
        iconButtonStatusMixin({ state, colorScheme, theme }),
        style,
      )}
    />
  );
};
