import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat, isEmpty } from 'lodash';

import {
  PanelActions,
  PanelBaseAttrs,
  PanelContainerAttrs,
} from '../../../declarations';

import { panelHeaderAppendMixin } from '../helpers';

import { ButtonGroup } from '../../../../ButtonGroup';

export interface PanelHeaderActionsProps
  extends PanelBaseAttrs,
    Pick<PanelContainerAttrs, 'size' | 'actions'> {
  actions: PanelActions;
}

export const PanelHeaderActions: React.FC<PanelHeaderActionsProps> = ({
  actions,
  as,
  size = 'md',
  styles,
}) => {
  const filteredActions: PanelActions = React.useMemo(
    () => (actions ? actions.filter((action) => !isEmpty(action)) : []),
    [actions],
  );
  const theme = useTheme();
  const baseStyles = panelHeaderAppendMixin({ size, theme });
  return (
    <ButtonGroup
      as={as}
      alignItems="flex-start"
      alignSelf="stretch"
      styles={concat(baseStyles, styles)}
      flex="0 0 auto"
      marginLeft="auto"
    >
      {filteredActions?.map((action) => action)}
    </ButtonGroup>
  );
};
