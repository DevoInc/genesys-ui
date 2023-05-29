import * as React from 'react';
import * as _ from 'lodash';

import { StyledOverloadCssProps } from '../../../../../declarations';
import { PanelFooterActionsType, PanelFooterSize } from '../declarations';

import { Flex } from '../../../../index';

export interface PanelFooterActionsProps extends StyledOverloadCssProps {
  actions?: PanelFooterActionsType;
  children?: React.ReactNode;
  size?: PanelFooterSize;
}

export const PanelFooterActions: React.FC<PanelFooterActionsProps> = ({
  actions,
  children,
  size = 'md',
  styles,
}) => {
  const filteredActions = React.useMemo(
    () => actions && actions.filter((action) => !_.isEmpty(action)),
    [actions]
  );

  if (children)
    return (
      <Flex.Item flex="0 1 auto" marginLeft="auto" minWidth="0">
        <Flex alignItems="center" width="100%">
          {children}
        </Flex>
      </Flex.Item>
    );

  return (
    <Flex.Item flex="0 1 auto" marginLeft="auto" minWidth="0" styles={styles}>
      <Flex alignItems="center" width="100%" as="ul">
        {filteredActions.map((action, idx) => (
          <Flex.Item
            marginLeft={`cmp-${size === 'md' || size === 'sm' ? 'sm' : 'xs'}`}
            minWidth="0"
            flex="0 1 auto"
            key={`PanelFooterContentAppend-${idx}`}
            as="li"
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
