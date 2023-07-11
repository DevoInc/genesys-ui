import * as React from 'react';
import { concat } from 'lodash';
import { useTheme } from 'styled-components';

import { buttonStateMap } from '../../../utils';

import {
  IconButtonRemove,
  IconButtonRemoveProps,
} from '../../../../IconButton';
import { TabsItemState } from '../../../declarations';

export interface TabsItemCloseProps
  extends Omit<IconButtonRemoveProps, 'state'> {
  /** Possible states */
  state?: TabsItemState;
}

export const TabsItemClose: React.FC<TabsItemCloseProps> = ({
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
