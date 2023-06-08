import * as React from 'react';

import { Flex } from '../../..';

export interface AppBarActionsProps {
  id: string;
  /** Actions content */
  children: React.ReactNode;
}

export const AppBarActions: React.FC<AppBarActionsProps> = ({
  id,
  children,
}) => (
  <Flex.Item id={`${id}__actions`} marginLeft="auto">
    {children}
  </Flex.Item>
);
