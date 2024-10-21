import * as React from 'react';
import { useTheme } from 'styled-components';

import type { TStepperSize } from '../../declarations';
import { stepperContainerMixin } from './helpers';
import { HFlex, type HFlexProps } from '../../../HFlex';
import { mergeStyles } from '../../../../helpers';

export interface StepperContainerProps extends Omit<HFlexProps, 'spacing'> {
  /** Sizes options for icon and text */
  size?: TStepperSize;
}

export const StepperContainer: React.FC<StepperContainerProps> = ({
  alignItems = 'center',
  as = 'ol',
  children,
  height,
  padding,
  size,
  style,
  ...restFlexProps
}) => {
  const theme = useTheme();
  const containerTokens = theme.cmp.stepper.container;
  return (
    <HFlex
      {...restFlexProps}
      alignItems={alignItems}
      as={as}
      spacing="cmp-md"
      height={height || containerTokens.size.height[size]}
      style={mergeStyles(
        stepperContainerMixin({ size, padding, theme }),
        style,
      )}
    >
      {children}
    </HFlex>
  );
};
