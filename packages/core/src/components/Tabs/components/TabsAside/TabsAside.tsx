import * as React from 'react';

import { Flex, type FlexProps } from '../../../Flex';

export interface TabsAsideProps extends FlexProps {}

export const TabsAside: React.FC<TabsAsideProps> = ({
  alignItems = 'center',
  children,
  marginLeft = 'auto',
  ...restFlexProps
}) => (
  <Flex {...restFlexProps} marginLeft={marginLeft} alignItems={alignItems}>
    {children}
  </Flex>
);
