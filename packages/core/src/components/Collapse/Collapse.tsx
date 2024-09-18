import * as React from 'react';

import type { IDataAttrs } from '../../declarations';
import {
  CollapseMarker,
  CollapseContainer,
  type CollapseContainerProps,
  CollapseHeading,
  type CollapseHeadingProps,
} from './components';

export interface CollapseProps
  extends IDataAttrs,
    CollapseContainerProps,
    Pick<CollapseHeadingProps, 'truncateLine'> {
  heading?: CollapseHeadingProps['children'];
}

export const InternalCollapse: React.FC<CollapseProps> = ({
  expanded,
  heading,
  onClick,
  style,
  tooltip,
  truncateLine = 1,
  ...nativeProps
}) => (
  <Collapse._Container
    {...nativeProps}
    aria-expanded={expanded}
    expanded={expanded}
    onClick={onClick}
    style={style}
    tooltip={tooltip}
  >
    <Collapse._Marker expanded={expanded} tabIndex={-1} />
    <Collapse._Heading truncateLine={truncateLine}>{heading}</Collapse._Heading>
  </Collapse._Container>
);

export const Collapse = InternalCollapse as typeof InternalCollapse & {
  _Marker: typeof CollapseMarker;
  _Container: typeof CollapseContainer;
  _Heading: typeof CollapseHeading;
};

Collapse._Container = CollapseContainer;
Collapse._Heading = CollapseHeading;
Collapse._Marker = CollapseMarker;

InternalCollapse.displayName = 'Collapse';
Collapse._Container.displayName = 'Collapse._Container';
Collapse._Heading.displayName = 'Collapse._Heading';
Collapse._Marker.displayName = 'Collapse._Marker';
