import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import { StepperSize } from '../../declarations';

import { stepperContainerMixin } from './helpers';

import { Flex, FlexProps } from '../../../Flex';

export interface StepperContainerProps extends Omit<FlexProps, 'size'> {
  /** Sizes options for icon and text */
  size?: StepperSize;
}

export const StepperContainer: React.FC<StepperContainerProps> = ({
  alignItems = 'center',
  as = 'ol',
  children,
  size,
  styles,
  ...restFlexProps
}) => {
  const theme = useTheme();
  const containerTokens = theme.cmp.stepper.container;
  return (
    <Flex
      {...restFlexProps}
      alignItems={alignItems}
      as={as}
      gap={containerTokens.space.gap}
      height={theme.cmp.stepper.container.size.height[size]}
      padding={`0 ${containerTokens.space.padding}`}
      styles={concat(stepperContainerMixin({ size, theme }), styles)}
    >
      {children}
    </Flex>
  );
};
