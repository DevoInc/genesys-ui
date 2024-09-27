import * as React from 'react';

import { PickUnion } from '../../../../typeFunctions';
import { HeadingProps } from '../../../Typography/components/Heading';
import { Typography } from '../../../Typography';
import { mergeStyles } from '../../../../helpers';

export interface CollapseHeadingProps
  extends Omit<HeadingProps, 'truncateLine'> {
  truncateLine?: PickUnion<HeadingProps['truncateLine'], 1 | 2>;
}

export const CollapseHeading: React.FC<CollapseHeadingProps> = ({
  children,
  style,
  truncateLine = 1,
  ...restHeadingProps
}) => (
  <Typography.Heading
    {...restHeadingProps}
    truncateLine={truncateLine}
    size="h6"
    style={mergeStyles({ position: 'relative', pointerEvents: 'none' }, style)}
  >
    {children}
  </Typography.Heading>
);
