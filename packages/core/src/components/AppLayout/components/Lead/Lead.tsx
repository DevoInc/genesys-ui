import * as React from 'react';
import { useTheme } from 'styled-components';

import { Grid } from '../../../Grid';

export interface AppLayoutLeadProps {
  children: React.ReactNode;
}

export const Lead: React.FC<AppLayoutLeadProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <Grid.Item
      gridArea="app-lead"
      overflowX="auto"
      height={theme.alias.size.height.surface.xxs}
    >
      {children}
    </Grid.Item>
  );
};
