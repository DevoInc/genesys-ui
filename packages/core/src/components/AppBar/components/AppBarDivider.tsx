import * as React from 'react';
import { useTheme } from 'styled-components';

import { Divider } from '../../Divider';
import { Flex } from '../../Flex';

export interface AppBarDividerProps {
  id: string;
}

export const AppBarDivider: React.FC<AppBarDividerProps> = ({ id }) => {
  const appBarDividerTokens = useTheme().cmp.appBar.divider;

  return (
    <Flex.Item id={`${id}__divider`}>
      <Divider
        vertical
        customColor={appBarDividerTokens.color.border}
        height={appBarDividerTokens.size.height}
        margin="0"
      />
    </Flex.Item>
  );
};
