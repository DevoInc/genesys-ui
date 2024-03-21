import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import { StepperSize } from '../../declarations';

import { stepperContainerMixin } from './helpers';

import { HFlex, type HFlexProps } from '../../../HFlex';

export interface StepperContainerProps extends Omit<HFlexProps, 'spacing'> {
  /** Sizes options for icon and text */
  size?: StepperSize;
}

export const StepperContainer: React.FC<StepperContainerProps> = ({
  alignItems = 'center',
  as = 'ol',
  children,
  height,
  padding,
  size,
  styles,
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
      padding={padding || `0 ${containerTokens.space.padding}`}
      styles={concat(stepperContainerMixin({ size, theme }), styles)}
    >
      {children}
    </HFlex>
  );
};
