import * as React from 'react';

import type { ICollapse } from '../../declarations';
import { CollapseContext } from '../../context';
import {
  IconButtonCollapse,
  IconButtonCollapseProps,
} from '../../../IconButton';
import { mergeStyles } from '../../../../helpers';

export interface CollapseMarkerProps
  extends Pick<IconButtonCollapseProps, 'size' | 'style' | 'tabIndex'>,
    Pick<ICollapse, 'expanded'> {}

export const CollapseMarker: React.FC<CollapseMarkerProps> = ({
  expanded,
  size = 'sm',
  style,
}) => {
  const context = React.useContext(CollapseContext);
  const evalExpanded = expanded || context.expanded;
  return (
    <IconButtonCollapse
      tabIndex={-1}
      state={evalExpanded ? 'expanded' : 'enabled'}
      size={size}
      style={mergeStyles({ pointerEvents: 'none' }, style)}
    />
  );
};
