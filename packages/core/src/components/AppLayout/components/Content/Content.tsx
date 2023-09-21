import * as React from 'react';

import { Grid } from '../../../Grid';

export interface AppLayoutContentProps
  extends Pick<
    React.ComponentProps<typeof Grid.Item>,
    'padding' | 'overflow' | 'overflowX' | 'overflowY'
  > {
  children: React.ReactNode;
}

export const Content: React.FC<AppLayoutContentProps> = ({
  children,
  padding = 'layout-xxs',
  overflow,
  overflowX,
  overflowY = 'auto',
}) => (
  <Grid.Item
    gridArea="app-content"
    as="main"
    padding={padding}
    overflow={overflow}
    overflowX={overflowX}
    overflowY={overflowY}
  >
    {children}
  </Grid.Item>
);
