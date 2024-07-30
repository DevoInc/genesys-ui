import * as React from 'react';

import { CollapseContainerProps } from '../CollapseContainer';
import { CollapseContext } from '../../context';
import {
  IconButtonCollapse,
  IconButtonCollapseProps,
} from '../../../IconButton';
import { mergeStyles } from '../../../../helpers';

export interface CollapseMarkerProps
  extends Pick<IconButtonCollapseProps, 'size' | 'style' | 'tabIndex'>,
    Pick<CollapseContainerProps, 'expanded'> {}

export const CollapseMarker: React.FC<CollapseMarkerProps> = ({
  expanded,
  size = 'sm',
  style,
}) => {
  const context = React.useContext(CollapseContext);
  const evalExpanded = expanded || context.expanded;
  return (
    <IconButtonCollapse
      state={evalExpanded ? 'expanded' : 'enabled'}
      size={size}
      style={mergeStyles({ pointerEvents: 'none' }, style)}
    />
  );
};
