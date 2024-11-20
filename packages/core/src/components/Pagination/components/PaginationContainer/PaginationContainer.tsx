import * as React from 'react';
import { HFlex, type HFlexProps } from '../../../HFlex';
import { TBaseSize } from 'src/declarations';

export interface PaginationContainerProps extends HFlexProps {
  size: TBaseSize;
}

export const PaginationContainer: React.FC<PaginationContainerProps> = ({
  as = 'nav',
  justifyContent = 'flex-end',
  size = 'md',
  spacing,
  children,
  ...restHFlexProps
}) => {
  return (
    <HFlex
      {...restHFlexProps}
      as={as}
      justifyContent={justifyContent}
      spacing={spacing || `cmp-${size}`}
    >
      {children}
    </HFlex>
  );
};
