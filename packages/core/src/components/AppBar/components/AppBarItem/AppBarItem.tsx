import * as React from 'react';

import { Flex, type FlexItemProps } from '../../../Flex';

export interface AppBarItemProps extends FlexItemProps {}

export const AppBarItem: React.FC<AppBarItemProps> = ({
  children,
  ...restFlexItemProps
}) => <Flex.Item {...restFlexItemProps}>{children}</Flex.Item>;
