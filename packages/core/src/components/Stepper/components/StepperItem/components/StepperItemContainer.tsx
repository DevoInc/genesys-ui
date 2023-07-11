import * as React from 'react';
import { concat } from 'lodash';
import { useTheme } from 'styled-components';

import { Flex, FlexProps } from '../../../../Flex';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StepperItemContainerProps extends FlexProps {}

export const StepperItemContainer: React.FC<StepperItemContainerProps> = ({
  alignItems = 'center',
  as = 'li',
  children,
  styles,
  ...restFlexProps
}) => {
  const theme = useTheme();
  const itemTokens = theme.cmp.stepper.item;
  return (
    <Flex
      {...restFlexProps}
      alignItems={alignItems}
      as={as}
      styles={concat(`gap: ${itemTokens.space.gap}`, styles)}
    >
      {children}
    </Flex>
  );
};
