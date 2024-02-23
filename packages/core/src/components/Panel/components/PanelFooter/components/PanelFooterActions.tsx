import * as React from 'react';
import { isEmpty } from 'lodash';

import { PanelFooterAttrs } from '../declarations';
import { PanelBaseAttrs } from '../../../declarations';

import { Flex } from '../../../../Flex';
import { ButtonGroup } from '../../../../ButtonGroup';

export interface PanelFooterActionsProps
  extends PanelBaseAttrs,
    Pick<PanelFooterAttrs, 'actions' | 'children' | 'size'> {}

export const PanelFooterActions: React.FC<PanelFooterActionsProps> = ({
  actions,
  as,
  children,
  size = 'md',
  styles,
}) => {
  const filteredActions = React.useMemo(
    () => actions && actions.filter((action) => !isEmpty(action)),
    [actions],
  );

  if (children)
    return (
      <Flex.Item
        as={as}
        flex="0 1 auto"
        marginLeft="auto"
        minWidth="0"
        styles={styles}
      >
        <Flex alignItems="center" width="100%">
          {children}
        </Flex>
      </Flex.Item>
    );

  return (
    <Flex.Item
      as={as}
      flex="0 1 auto"
      marginLeft="auto"
      minWidth="0"
      styles={styles}
    >
      <ButtonGroup gap={`cmp-${size === 'md' || size === 'sm' ? 'sm' : 'xs'}`}>
        {filteredActions.map((action) => action)}
      </ButtonGroup>
    </Flex.Item>
  );
};
