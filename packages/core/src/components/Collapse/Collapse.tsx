import * as React from 'react';

import {
  CollapseMarker,
  CollapseContainer,
  type CollapseContainerProps,
  CollapseHeading,
  type CollapseHeadingProps,
} from './components';

export interface CollapseProps
  extends CollapseContainerProps,
    Pick<CollapseHeadingProps, 'truncateLine'> {
  heading?: CollapseHeadingProps['children'];
}

export const InternalCollapse: React.FC<CollapseProps> = ({
  expanded,
  heading,
  onClick,
  styles,
  tooltip,
  truncateLine = 1,
  ...nativeProps
}) => (
  <Collapse._Container
    {...nativeProps}
    aria-expanded={expanded}
    expanded={expanded}
    onClick={onClick}
    styles={styles}
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

Collapse._Marker = CollapseMarker;
Collapse._Container = CollapseContainer;
Collapse._Heading = CollapseHeading;
