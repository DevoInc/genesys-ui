import * as React from 'react';
import { concat } from 'lodash';

import { CollapseContainerProps } from './CollapseContainer';
import { CollapseContext } from '../context';
import { IconButtonCollapse, IconButtonCollapseProps } from '../../IconButton';

export interface CollapseMarkerProps
  extends Pick<IconButtonCollapseProps, 'size' | 'styles' | 'tabIndex'>,
    Pick<CollapseContainerProps, 'expanded'> {}

export const CollapseMarker: React.FC<CollapseMarkerProps> = ({
  expanded,
  size = 'sm',
  styles,
}) => {
  const context = React.useContext(CollapseContext);
  const evalExpanded = expanded || context.expanded;
  return (
    <IconButtonCollapse
      state={evalExpanded ? 'expanded' : 'enabled'}
      size={size}
      styles={concat('pointer-events: none', styles)}
    />
  );
};
