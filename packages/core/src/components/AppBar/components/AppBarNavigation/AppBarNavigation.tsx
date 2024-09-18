import * as React from 'react';

import { Flex, type FlexItemProps } from '../../../Flex';

export interface AppBarNavigationProps extends Omit<FlexItemProps, 'children'> {
  children: React.ReactNode;
}

export const AppBarNavigation: React.FC<AppBarNavigationProps> = ({
  flex = '1 0 auto',
  children,
  ...restFlexItemProps
}) => (
  <Flex.Item {...restFlexItemProps} flex={flex}>
    {children}
  </Flex.Item>
);
