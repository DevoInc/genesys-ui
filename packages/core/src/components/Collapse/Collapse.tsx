import * as React from 'react';

import { IconButtonCollapse, Flex, Typography } from '../';
import { PickUnion } from '../../typeFunctions';
import { HeadingProps } from '../Typography/components/block';
import {
  CollapseButton,
  CollapseContainer,
  CollapseContainerProps,
  CollapseHeading,
  CollapseHeadingProps,
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
  <CollapseContainer
    {...nativeProps}
    aria-expanded={expanded}
    css={styles}
    expanded={expanded}
    onClick={onClick}
    tooltip={tooltip}
  >
    <CollapseButton expanded={expanded} onClick={onClick} tooltip={tooltip} />
    <CollapseHeading truncateLine={truncateLine}>{heading}</CollapseHeading>
  </CollapseContainer>
);

export const Collapse = InternalCollapse as typeof InternalCollapse & {
  Button: typeof CollapseButton;
  Container: typeof CollapseContainer;
  Heading: typeof CollapseHeading;
};

Collapse.Button = CollapseButton;
Collapse.Container = CollapseContainer;
Collapse.Heading = CollapseHeading;
