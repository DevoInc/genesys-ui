import * as React from 'react';
import { useTheme } from 'styled-components';

import {
  TPanelActions,
  IPanelBaseAttrs,
  IPanelContainerAttrs,
} from '../../../../declarations';
import { panelHeaderAppendMixin } from '../../helpers';
import { ButtonGroup } from '../../../../../ButtonGroup';
import { mergeStyles } from '../../../../../../helpers';

export interface PanelHeaderActionsProps
  extends IPanelBaseAttrs,
    Pick<IPanelContainerAttrs, 'size' | 'actions'> {
  actions: TPanelActions;
}

export const PanelHeaderActions: React.FC<PanelHeaderActionsProps> = ({
  actions,
  as,
  size = 'md',
  style,
}) => {
  const filteredActions: TPanelActions = React.useMemo(
    () => (actions ? actions.filter((action) => !!action) : []),
    [actions],
  );
  const theme = useTheme();
  const baseStyles = panelHeaderAppendMixin({ size, theme });
  return (
    <ButtonGroup
      as={as}
      alignItems="flex-start"
      alignSelf="stretch"
      style={mergeStyles(baseStyles, style)}
      flex="0 0 auto"
      marginLeft="auto"
    >
      {filteredActions?.map((action) => action)}
    </ButtonGroup>
  );
};
