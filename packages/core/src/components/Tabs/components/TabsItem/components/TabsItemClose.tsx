import * as React from 'react';
import { concat } from 'lodash';
import { useTheme } from 'styled-components';

import type { TTabsItemState } from '../../../declarations';
import {
  IconButtonRemove,
  type IconButtonRemoveProps,
} from '../../../../IconButton';

import type { Resolve } from '../../../../../typeFunctions';

import { buttonStateMap } from '../../../utils';
import { TABS_ITEM_CLOSABLE_BUTTON_SIZE } from './constants';
import { tabsClosableButtonMixin } from './helpers';

export interface TabsItemCloseProps
  extends Omit<IconButtonRemoveProps, 'state'> {
  /** Possible states */
  state?: TTabsItemState;
}

export const TabsItemClose: React.FC<Resolve<TabsItemCloseProps>> = ({
  state,
  styles,
  ...restIconButtonRemoveProps
}) => {
  const theme = useTheme();
  return (
    <IconButtonRemove
      {...restIconButtonRemoveProps}
      size={TABS_ITEM_CLOSABLE_BUTTON_SIZE}
      state={buttonStateMap[state]}
      styles={concat(tabsClosableButtonMixin({ theme }), styles)}
    />
  );
};
