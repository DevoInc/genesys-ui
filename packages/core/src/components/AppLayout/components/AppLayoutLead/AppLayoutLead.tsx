import * as React from 'react';

import { Grid } from '../../../Grid';

export interface AppLayoutLeadProps {
  children: React.ReactNode;
}

export const AppLayoutLead: React.FC<AppLayoutLeadProps> = ({ children }) => (
  <Grid.Item gridArea="app-lead" overflowX="auto">
    {children}
  </Grid.Item>
);
