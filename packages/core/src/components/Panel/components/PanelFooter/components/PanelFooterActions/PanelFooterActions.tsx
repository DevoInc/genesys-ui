import * as React from 'react';

import type { IPanelFooterAttrs } from '../../declarations';
import type { IPanelBaseAttrs } from '../../../../declarations';
import { Flex } from '../../../../../Flex';
import { ButtonGroup } from '../../../../../ButtonGroup';

export interface PanelFooterActionsProps
  extends IPanelBaseAttrs,
    Pick<IPanelFooterAttrs, 'actions' | 'children' | 'size'> {}

export const PanelFooterActions: React.FC<PanelFooterActionsProps> = ({
  actions,
  as,
  children,
  size = 'md',
  style,
}) => {
  const filteredActions = React.useMemo(
    () => actions && actions.filter((action) => !!action),
    [actions],
  );

  return (
    <Flex.Item
      as={as}
      flex="0 1 auto"
      marginLeft="auto"
      minWidth="0"
      style={style}
    >
      {children ? (
        <Flex alignItems="center" width="100%">
          {children}
        </Flex>
      ) : (
        <ButtonGroup
          gap={`cmp-${size === 'md' || size === 'sm' ? 'sm' : 'xs'}`}
        >
          {filteredActions.map((action) => action)}
        </ButtonGroup>
      )}
    </Flex.Item>
  );
};
