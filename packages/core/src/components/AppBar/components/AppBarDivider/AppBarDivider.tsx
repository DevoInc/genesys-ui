import * as React from 'react';
import { useTheme } from 'styled-components';

import { Divider, DividerProps } from '../../../Divider';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppBarDividerProps extends Omit<DividerProps, 'vertical'> {}

export const AppBarDivider: React.FC<AppBarDividerProps> = ({
  customColor,
  height,
  margin = '0',
  ...restDividerProps
}) => {
  const appBarDividerTokens = useTheme().cmp.appBar.divider;

  return (
    <Divider
      {...restDividerProps}
      vertical
      customColor={customColor || appBarDividerTokens.color.border}
      height={height || appBarDividerTokens.size.height}
      margin={margin}
    />
  );
};
