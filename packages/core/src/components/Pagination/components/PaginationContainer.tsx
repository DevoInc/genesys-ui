import * as React from 'react';

import { GlobalAriaProps, StyledPolymorphicProps } from '../../../declarations';
import { PaginationCommonInterface } from '../declarations';

import { HFlex } from '../..';

export interface PaginationContainerProps
  extends PaginationCommonInterface,
    Pick<GlobalAriaProps, 'aria-label' | 'aria-describedby'>,
    StyledPolymorphicProps {
  children?: React.ReactNode;
  WrapperComponent?: React.ComponentType<any>;
}

export const PaginationContainer: React.FC<PaginationContainerProps> = ({
  as = 'nav',
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  id,
  size = 'md',
  styles,
  WrapperComponent,
}) => {
  const WrapperComponentEval = WrapperComponent || HFlex;

  return (
    <WrapperComponentEval
      as={WrapperComponent ? null : as || 'nav'}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      justifyContent="flex-end"
      id={id}
      spacing={`cmp-${size}`}
      styles={styles}
    >
      {children}
    </WrapperComponentEval>
  );
};
