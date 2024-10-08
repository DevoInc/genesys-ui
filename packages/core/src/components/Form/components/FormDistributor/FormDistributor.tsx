import * as React from 'react';

import { Flex, type FlexProps } from '../../../Flex';
import type { TFormGap } from '../../declarations';

export interface FormDistributorProps
  extends Omit<FlexProps, 'flexDirection' | 'gap'> {
  /** If the fields  or other form groups are displayed in a row or in a column. */
  direction?: 'column' | 'row';
  /** The gap between the form group items.*/
  itemsGap?: TFormGap;
  /** Children */
  children: React.ReactNode;
}

export const FormDistributor: React.FC<FormDistributorProps> = ({
  children,
  direction = 'column',
  itemsGap = 'md',
  ...flexProps
}) => (
  <Flex
    {...flexProps}
    flexDirection={direction}
    gap={`cmp-${itemsGap}`}
    role="group"
  >
    {children}
  </Flex>
);
