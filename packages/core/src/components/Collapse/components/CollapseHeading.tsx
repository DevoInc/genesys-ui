import * as React from 'react';
import { concat } from 'lodash';
import { PickUnion } from '../../../typeFunctions';

import { HeadingProps } from '../../Typography/components/block/Heading';

import { Typography } from '../../Typography';

export interface CollapseHeadingProps
  extends Omit<HeadingProps, 'truncateLine'> {
  truncateLine?: PickUnion<HeadingProps['truncateLine'], 1 | 2>;
}

export const CollapseHeading: React.FC<CollapseHeadingProps> = ({
  children,
  styles,
  truncateLine = 1,
  ...restHeadingProps
}) => (
  <Typography.Heading
    {...restHeadingProps}
    truncateLine={truncateLine}
    size="h6"
    styles={concat('position: relative; pointer-events: none;', styles)}
  >
    {children}
  </Typography.Heading>
);
