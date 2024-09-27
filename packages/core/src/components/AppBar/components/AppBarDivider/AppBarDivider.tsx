import * as React from 'react';
import { useTheme } from 'styled-components';

import { Divider, DividerProps } from '../../../Divider';

export interface AppBarDividerProps extends Omit<DividerProps, 'vertical'> {}

export const AppBarDivider: React.FC<AppBarDividerProps> = ({
  customColor,
  height,
  margin = '0',
  style,
  colorScheme,
  width,
}) => {
  const appBarDividerTokens = useTheme().cmp.appBar.divider;
  return (
    <Divider
      style={style}
      colorScheme={colorScheme}
      vertical
      customColor={customColor || appBarDividerTokens.color.border}
      height={height || appBarDividerTokens.size.height}
      width={width}
      margin={margin}
    />
  );
};
