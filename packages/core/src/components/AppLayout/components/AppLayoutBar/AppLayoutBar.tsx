import * as React from 'react';
import { useTheme } from 'styled-components';

import { Grid } from '../../../Grid';

export interface AppLayoutBarProps {
  children: React.ReactNode;
}

export const AppLayoutBar: React.FC<AppLayoutBarProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <Grid.Item
      gridArea="app-bar"
      as="header"
      zIndex={theme.alias.elevation.zIndex.depth.stickyTop}
    >
      {children}
    </Grid.Item>
  );
};
