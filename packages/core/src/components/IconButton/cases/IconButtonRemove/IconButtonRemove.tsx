import * as React from 'react';

import { GIExitClose } from '@devoinc/genesys-icons';

import type { Resolve } from '../../../../typeFunctions';
import { ICON_BUTTON_REDUCED_SIZE_PROP_MAP } from '../../constants';
import type {
  TBlendColorScheme,
  TNeutralColorScheme,
} from '../../../../declarations';
import type { TButtonBasicState } from '../../../Button/declarations';
import { IconButton, type IconButtonProps } from '../../IconButton';

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
  colorScheme?: TBlendColorScheme | TNeutralColorScheme;
  state?: TButtonBasicState;
}

export const IconButtonRemove: React.FC<Resolve<IconButtonRemoveProps>> = ({
  colorScheme = 'blend-base',
  size = 'md',
  state = 'enabled',
  ...restIconButtonProps
}) => (
  <IconButton
    {...restIconButtonProps}
    colorScheme={colorScheme}
    icon={<GIExitClose />}
    circular
    hasBoldIcon
    size={ICON_BUTTON_REDUCED_SIZE_PROP_MAP[size]}
    state={state}
  />
);
