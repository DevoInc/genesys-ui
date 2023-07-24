import * as React from 'react';

import {
  CollapseButton,
  CollapseContainer,
  CollapseContainerProps,
  CollapseHeading,
  CollapseHeadingProps,
} from './components';
import { StyledOverloadCssPropsWithRecord } from '../../declarations';

export interface BaseCollapseProps
  extends CollapseContainerProps,
    Pick<CollapseHeadingProps, 'truncateLine'> {
  heading?: CollapseHeadingProps['children'];
}

export type CollapseProps = BaseCollapseProps &
  StyledOverloadCssPropsWithRecord<'button' | 'container' | 'heading'>;

export const InternalCollapse: React.FC<CollapseProps> = ({
  expanded,
  heading,
  onClick,
  styles,
  subcomponentStyles,
  tooltip,
  truncateLine = 1,
  ...nativeProps
}) => (
  <Collapse.Container
    {...nativeProps}
    aria-expanded={expanded}
    expanded={expanded}
    onClick={onClick}
    styles={subcomponentStyles?.container || styles}
    tooltip={tooltip}
  >
    <Collapse.Button
      expanded={expanded}
      onClick={onClick}
      styles={subcomponentStyles?.button}
      tooltip={tooltip}
    />
    <Collapse.Heading
      styles={subcomponentStyles?.heading}
      truncateLine={truncateLine}
    >
      {heading}
    </Collapse.Heading>
  </Collapse.Container>
);

export const Collapse = InternalCollapse as typeof InternalCollapse & {
  Button: typeof CollapseButton;
  Container: typeof CollapseContainer;
  Heading: typeof CollapseHeading;
};

Collapse.Button = CollapseButton;
Collapse.Container = CollapseContainer;
Collapse.Heading = CollapseHeading;
