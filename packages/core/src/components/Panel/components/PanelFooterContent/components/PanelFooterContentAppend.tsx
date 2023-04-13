import * as React from 'react';
import * as _ from 'lodash';

import { Flex } from '../../../../';
import { PanelActions, PanelSize } from '../../../declarations';

export interface PanelFooterContentAppendProps {
  actions?: PanelActions;
  appendContent?: React.ReactElement;
  size?: PanelSize;
}

export const PanelFooterContentAppend: React.FC<
  PanelFooterContentAppendProps
> = ({ actions, appendContent, size }) => {
  const filteredActions = React.useMemo(
    () => actions && actions.filter((action) => !_.isEmpty(action)),
    [actions]
  );

  if (appendContent)
    return (
      <Flex.Item flex="0 1 auto" marginLeft="auto" minWidth="0">
        <Flex alignItems="center" width="100%">
          {appendContent}
        </Flex>
      </Flex.Item>
    );

  return (
    <Flex.Item flex="0 1 auto" marginLeft="auto" minWidth="0">
      <Flex alignItems="center" width="100%" forwardedAs="ul">
        {filteredActions.map((action, idx) => (
          <Flex.Item
            marginLeft={`cmp-${size === 'md' || size === 'sm' ? 'sm' : 'xs'}`}
            minWidth="0"
            flex="0 1 auto"
            key={`PanelFooterContentAppend-${idx}`}
            forwardedAs="li"
          >
            {React.cloneElement(action, {
              key: idx,
              onClick: action.props?.onClick || close,
            })}
          </Flex.Item>
        ))}
      </Flex>
    </Flex.Item>
  );
};
