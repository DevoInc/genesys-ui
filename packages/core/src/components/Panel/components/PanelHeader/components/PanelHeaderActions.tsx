import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat, isEmpty } from 'lodash';

//TODO: add the component Dropdown when it's ready

import { PanelHeaderActionsType, PanelHeaderSize } from '../declarations';
import { StyledOverloadCssProps } from '../../../../../declarations';

import { panelHeaderAppendMixin } from '../helpers';

import { Flex } from '../../../../Flex';

export interface PanelHeaderActionsProps extends StyledOverloadCssProps {
  actions?: PanelHeaderActionsType;
  size?: PanelHeaderSize;
}

export const PanelHeaderActions: React.FC<PanelHeaderActionsProps> = ({
  actions,
  size = 'md',
  styles,
}) => {
  const filteredActions: PanelHeaderActionsType = React.useMemo(
    () => actions && actions.filter((action) => !isEmpty(action)),
    [actions],
  );
  const theme = useTheme();
  const baseStyles = panelHeaderAppendMixin({ size, theme });
  return (
    <Flex
      alignItems="flex-start"
      alignSelf="stretch"
      styles={concat(baseStyles, styles)}
      flex="0 0 auto"
      marginLeft="auto"
    >
      {filteredActions?.map((action) => action)}
    </Flex>
  );
};
