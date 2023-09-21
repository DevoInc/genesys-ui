import * as React from 'react';

import { Grid } from '../../../Grid';

export interface AppLayoutContentProps {
  children: React.ReactNode;
  padding?: string;
}

export const Content: React.FC<AppLayoutContentProps> = ({
  children,
  padding = 'layout-xxs',
}) => (
  <Grid.Item gridArea="app-content" as="main" padding={padding}>
    {children}
  </Grid.Item>
);
