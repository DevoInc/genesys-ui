import * as React from 'react';

import { Flex } from '../../../Flex';

export interface CollapseAppendConentProps {
  children?: React.ReactNode;
}

export const CollapseAppendContent: React.FC<CollapseAppendConentProps> = ({
  children,
}) => <Flex.Item marginLeft="auto">{children}</Flex.Item>;
