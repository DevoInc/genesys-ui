import * as React from 'react';

import { Flex, FlexProps } from '../../';
import { FormGroup } from './FormGroup';
import { FormButtons } from './FormButtons';
import { FormGap } from '../declarations';
import { GlobalAriaProps, GlobalAttrProps } from '../../../declarations';

export interface FormDistributorProps
  extends GlobalAttrProps,
    GlobalAriaProps,
    Pick<FlexProps, 'alignItems' | 'justifyContent' | 'flexWrap'> {
  /** If the fields  or other form groups are displayed in a row or in a column. */
  direction?: 'column' | 'row';
  /** The gap between the form group items.*/
  itemsGap?: FormGap;
  /** Children */
  children: React.ReactNode;
}

export const FormDistributor: React.FC<FormDistributorProps> = ({
  alignItems,
  children,
  direction = 'column',
  flexWrap,
  itemsGap = 'md',
  justifyContent,
  ...nativeProps
}) => {
  const childrenArr = Array.isArray(children) ? children : [children];
  return (
    <Flex
      {...nativeProps}
      alignItems={alignItems}
      flexDirection={direction}
      flexWrap={flexWrap}
      gap={`cmp-${itemsGap}`}
      justifyContent={justifyContent}
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
