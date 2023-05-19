import * as React from 'react';

import { TabsDivider } from '../TabsDivider';

import { Flex, FlexProps } from '../../../Flex';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TabsAsideProps extends FlexProps {}

export const TabsAside: React.FC<TabsAsideProps> = ({
  alignItems = 'center',
  children,
  marginLeft = 'auto',
  ...restFlexProps
}) => (
  <Flex {...restFlexProps} marginLeft={marginLeft} alignItems={alignItems}>
    <TabsDivider vertical height="100%" />
    {children}
  </Flex>
);
