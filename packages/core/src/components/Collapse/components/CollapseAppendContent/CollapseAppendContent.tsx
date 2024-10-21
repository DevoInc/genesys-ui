import * as React from 'react';

import { Flex } from '../../../Flex';

export interface CollapseAppendContentProps {
  children?: React.ReactNode;
}

export const CollapseAppendContent: React.FC<CollapseAppendContentProps> = ({
  children,
}) => <Flex.Item marginLeft="auto">{children}</Flex.Item>;
