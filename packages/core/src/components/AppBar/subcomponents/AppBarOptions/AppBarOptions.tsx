import * as React from 'react';

import { Flex, HFlex } from '../../..';
import { AppBarDivider } from '..';

export interface AppBarOptionsProps {
  id: string;
  /** Options content */
  children: React.ReactNode;
}

export const AppBarOptions: React.FC<AppBarOptionsProps> = ({
  children,
  id,
}) => {
  return (
    <HFlex
      id={`${id}__user-options`}
      alignItems="center"
      marginLeft="auto"
      padding="0 cmp-md"
    >
      <AppBarDivider id={id} />
      <Flex.Item>{children}</Flex.Item>
    </HFlex>
  );
};
