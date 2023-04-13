import * as React from 'react';
import { useTheme } from 'styled-components';

import { Divider as UIDivider, Flex } from '../../..';

export interface AppBarDividerProps {
  id: string;
}

export const AppBarDivider: React.FC<AppBarDividerProps> = ({ id }) => {
  const appBarDividerTokens = useTheme().cmp.appBar.divider;

  return (
    <Flex.Item id={`${id}__divider`}>
      <UIDivider
        vertical
        customColor={appBarDividerTokens.color.border}
        height={appBarDividerTokens.size.height}
        margin="0"
      />
    </Flex.Item>
  );
};
