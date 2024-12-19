import * as React from 'react';
import { useTheme } from 'styled-components';

import { Flex, type FlexProps } from '../../../Flex';
import type { TFormGap } from '../../declarations';
import type { IFieldAttrs } from '../../../../declarations';

export interface FormDistributorProps
  extends Omit<FlexProps, 'flexDirection' | 'gap'>,
    Pick<IFieldAttrs, 'disabled'> {
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
  disabled,
  itemsGap = 'md',
  ...flexProps
}) => {
  const theme = useTheme();
  return (
    <Flex
      {...flexProps}
      flexDirection={direction}
      gap={`cmp-${itemsGap}`}
      role="group"
      style={
        disabled
          ? `opacity: ${theme.alias.shape.opacity.disabled}; pointer-events: none;`
          : undefined
      }
    >
      {children}
    </Flex>
  );
};
