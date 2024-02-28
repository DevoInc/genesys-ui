import * as React from 'react';
import { Flex, type FlexProps } from '../../Flex';
import { FormGap } from '../declarations';

export interface FormDistributorProps
  extends Omit<FlexProps, 'flexDirection' | 'gap'> {
  /** If the fields  or other form groups are displayed in a row or in a column. */
  direction?: 'column' | 'row';
  /** The gap between the form group items.*/
  itemsGap?: FormGap;
  /** Children */
  children: React.ReactNode;
}

export const FormDistributor: React.FC<FormDistributorProps> = ({
  children,
  direction = 'column',
  itemsGap = 'md',
  ...flexProps
}) => {
  const childrenArr = Array.isArray(children) ? children : [children];
  return (
    <Flex
      {...flexProps}
      flexDirection={direction}
      gap={`cmp-${itemsGap}`}
      role="group"
    >
      {children}
    </Flex>
  );
};
