import * as React from 'react';
import { concat } from 'lodash';
import { useTheme } from 'styled-components';

import {
  type Resolve,
  IconButtonRemove,
  type IconButtonRemoveProps,
} from '../../../../../index';
import { buttonStateMap } from '../../../utils';
import { type TabsItemState } from '../../../declarations';

export interface TabsItemCloseProps
  extends Omit<IconButtonRemoveProps, 'state'> {
  /** Possible states */
  state?: TabsItemState;
}

export const TabsItemClose: React.FC<Resolve<TabsItemCloseProps>> = ({
  state,
  styles,
  ...restIconButtonRemoveProps
}) => {
  const marginLeft = useTheme().cmp.tabs.item.space.margin.iconToText;
  return (
    <IconButtonRemove
      {...restIconButtonRemoveProps}
      size={'xs'}
      state={buttonStateMap[state]}
      styles={concat(`margin-left: ${marginLeft}`, styles)}
    />
  );
};
