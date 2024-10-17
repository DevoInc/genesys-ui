import * as React from 'react';

import type { IDataAttrs } from '../../declarations';
import {
  CollapseMarker,
  CollapseContainer,
  type CollapseContainerProps,
  CollapseHeading,
  type CollapseHeadingProps,
  CollapseAppendContent,
} from './components';

export interface CollapseProps
  extends IDataAttrs,
    CollapseContainerProps,
    Pick<CollapseHeadingProps, 'truncateLine'> {
  heading?: CollapseHeadingProps['children'];
  appendContent?: React.ReactNode;
  isDraggable?: boolean;
}

export const InternalCollapse: React.FC<CollapseProps> = ({
  expanded,
  heading,
  onClick,
  style,
  tooltip,
  truncateLine = 1,
  appendContent,
  isDraggable = false,
  onPointerDown,
  onKeyDown,
  ...nativeProps
}) => (
  <Collapse._Container
    {...nativeProps}
    onPointerDown={onPointerDown}
    onKeyDown={onKeyDown}
    aria-expanded={expanded}
    expanded={expanded}
    onClick={onClick}
    style={style}
    tooltip={tooltip}
    isDraggable={isDraggable}
  >
    <Collapse._Marker expanded={expanded} tabIndex={-1} />
    <Collapse._Heading truncateLine={truncateLine}>{heading}</Collapse._Heading>
    {appendContent && (
      <Collapse._AppendContent>{appendContent}</Collapse._AppendContent>
    )}
  </Collapse._Container>
);

export const Collapse = InternalCollapse as typeof InternalCollapse & {
  _Marker: typeof CollapseMarker;
  _Container: typeof CollapseContainer;
  _Heading: typeof CollapseHeading;
  _AppendContent: typeof CollapseAppendContent;
};

Collapse._Container = CollapseContainer;
Collapse._Heading = CollapseHeading;
Collapse._Marker = CollapseMarker;
Collapse._AppendContent = CollapseAppendContent;

InternalCollapse.displayName = 'Collapse';
Collapse._Container.displayName = 'Collapse._Container';
Collapse._Heading.displayName = 'Collapse._Heading';
Collapse._Marker.displayName = 'Collapse._Marker';
Collapse._AppendContent.displayName = 'Collapse._AppendContent';
