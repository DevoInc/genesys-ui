import * as React from 'react';

import { Flex, type FlexProps } from '../../../Flex';

export interface TabsAsideProps extends FlexProps {}

export const TabsAside: React.FC<TabsAsideProps> = ({
  alignItems = 'center',
  children,
  margin,
  marginLeft,
  ...restFlexProps
}) => (
  <Flex
    {...restFlexProps}
    margin={margin}
    marginLeft={marginLeft || (!margin ? 'auto' : undefined)}
    alignItems={alignItems}
  >
    {children}
  </Flex>
);
