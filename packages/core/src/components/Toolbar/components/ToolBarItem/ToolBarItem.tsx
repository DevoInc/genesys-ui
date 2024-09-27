import * as React from 'react';

import { Flex, type FlexProps } from '../../../Flex';

export interface ToolBarItemProps extends FlexProps {}

export const ToolBarItem: React.FC<ToolBarItemProps> = ({
  children,
  ...restFlexProps
}) => <Flex {...restFlexProps}>{children}</Flex>;
