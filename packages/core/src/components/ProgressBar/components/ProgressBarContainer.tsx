import * as React from 'react';

import { VFlex, type VFlexProps } from '../../VFlex';
import { ProgressBarContext } from '../context';
import type { IBaseProgressBar } from '../declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProgressBarContainerProps
  extends Omit<VFlexProps, 'childrenFitFullWidth' | 'position' | 'spacing'>,
    Pick<
      IBaseProgressBar,
      'colorScheme' | 'status' | 'size' | 'percent' | 'type' | 'withCustomInfo'
    > {}

export const ProgressBarContainer: React.FC<ProgressBarContainerProps> = ({
  children,
  colorScheme = 'dark',
  percent = 0,
  size = 'md',
  status = 'progressing',
  type = 'standard',
  width = '100%',
  withCustomInfo,
  ...VFlexProps
}) => {
  return (
    <VFlex
      {...VFlexProps}
      childrenFitFullWidth
      position="relative"
      spacing="cmp-xxs"
      width={width}
    >
      <ProgressBarContext.Provider
        value={{ colorScheme, percent, size, status, type, withCustomInfo }}
      >
        {children}
      </ProgressBarContext.Provider>
    </VFlex>
  );
};
