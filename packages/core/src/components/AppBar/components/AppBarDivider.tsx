import * as React from 'react';
import { useTheme } from 'styled-components';

import { Divider } from '../../Divider';
import { FlexItem } from '../../FlexItem';

export interface AppBarDividerProps {
  id: string;
}

export const AppBarDivider: React.FC<AppBarDividerProps> = ({ id }) => {
  const appBarDividerTokens = useTheme().tokens.cmp.appBar.divider;

  return (
    <FlexItem id={`${id}__divider`}>
      <Divider
        vertical
        customColor={appBarDividerTokens.color.border}
        height={appBarDividerTokens.size.height}
        margin="0"
      />
    </FlexItem>
  );
};
