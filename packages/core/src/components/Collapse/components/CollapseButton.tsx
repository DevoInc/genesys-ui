import * as React from 'react';

import { CollapseContainerProps } from './CollapseContainer';
import { IconButtonCollapse, IconButtonCollapseProps } from '../../IconButton';

export interface CollapseButtonProps
  extends Omit<IconButtonCollapseProps, 'state'>,
    Pick<CollapseContainerProps, 'expanded'> {}

export const CollapseButton: React.FC<CollapseButtonProps> = ({
  expanded,
  onClick,
  tooltip,
  ...restIconButtonCollapseProps
}) => (
  <IconButtonCollapse
    {...restIconButtonCollapseProps}
    state={expanded ? 'expanded' : 'enabled'}
    size="sm"
    onClick={(e) => {
      e.stopPropagation();
      onClick(e);
    }}
    tooltip={tooltip || (expanded ? 'Collapse' : 'Expand')}
  />
);
