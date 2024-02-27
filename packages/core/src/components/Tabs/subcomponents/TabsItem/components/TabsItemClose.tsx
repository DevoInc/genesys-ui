import * as React from 'react';
import { concat } from 'lodash';
import { useTheme } from 'styled-components';

import { type TabsItemState } from '../../../declarations';
import {
  IconButtonRemove,
  type IconButtonRemoveProps,
} from '../../../../IconButton';

import { type Resolve } from '../../../../../typeFunctions';

import { buttonStateMap } from '../../../utils';

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
