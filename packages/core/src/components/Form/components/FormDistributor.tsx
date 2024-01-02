import * as React from 'react';

import { Flex, FlexProps } from '../../';
import { FormGroup } from './FormGroup';
import { FormButtons } from './FormButtons';
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
      {childrenArr.map((child, idx) => {
        const hasExtraSpacing =
          child?.type?.name === FormButtons.name ||
          child?.type?.displayName === FormButtons.name ||
          ((child?.type?.name === FormGroup.name ||
            child?.type?.displayName === FormGroup.name) &&
            idx !== 0 &&
            child?.props?.legend &&
            !child?.props?.hideLegend);
        if (hasExtraSpacing) {
          return React.cloneElement(child, {
            key: idx,
            marginTop:
              child?.props?.marginTop || direction === 'column'
                ? 'cmp-xs'
                : null,
            marginLeft:
              child?.props?.marginLeft || direction === 'row' ? 'cmp-xs' : null,
          });
        } else {
          return child;
        }
      })}
    </Flex>
  );
};
