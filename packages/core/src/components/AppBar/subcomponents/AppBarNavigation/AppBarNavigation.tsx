import * as React from 'react';

import { Flex } from '../../../Flex';

export interface AppBarNavigationProps {
  id: string;
  /** Left content */
  children: React.ReactNode;
}

export const AppBarNavigation: React.FC<AppBarNavigationProps> = ({
  id,
  children,
}) => {
  return (
    <Flex.Item id={`${id}__tabs`} flex="1 0 auto">
      {children}
    </Flex.Item>
  );
};
