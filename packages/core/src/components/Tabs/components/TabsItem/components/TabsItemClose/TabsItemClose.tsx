import * as React from 'react';
import { useTheme } from 'styled-components';

import type { TTabsItemState } from '../../../../declarations';
import { TABS_ITEM_CLOSABLE_BUTTON_SIZE } from '../constants';
import type { Resolve } from '../../../../../../typeFunctions';
import { type ITabsLinkMixin, tabsClosableButtonMixin } from '../helpers';
import { mergeStyles } from '../../../../../../helpers';
import {
  IconButtonRemove,
  type IconButtonRemoveProps,
} from '../../../../../IconButton';

export interface TabsItemCloseProps
  extends Omit<IconButtonRemoveProps, 'state' | 'size'>,
    Pick<ITabsLinkMixin, 'align'> {
  /** Possible states */
  state?: TTabsItemState;
}

export const TabsItemClose: React.FC<Resolve<TabsItemCloseProps>> = ({
  align = 'middle',
  state = 'enabled',
  style,
  ...restIconButtonRemoveProps
}) => {
  const theme = useTheme();
  return (
    <IconButtonRemove
      {...restIconButtonRemoveProps}
      size={TABS_ITEM_CLOSABLE_BUTTON_SIZE}
      state={state === 'selected' ? 'enabled' : state}
      style={mergeStyles(
        tabsClosableButtonMixin({ align, theme, state }),
        style,
      )}
    />
  );
};
