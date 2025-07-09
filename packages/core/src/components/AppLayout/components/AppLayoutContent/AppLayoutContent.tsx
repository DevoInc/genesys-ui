import * as React from 'react';

import { Grid } from '../../../Grid';
import type { IStyleAttr, IStyledPolymorphic } from '../../../../declarations';

export interface AppLayoutContentProps
  extends IStyleAttr,
    IStyledPolymorphic,
    Pick<
      React.ComponentProps<typeof Grid.Item>,
      'padding' | 'overflow' | 'overflowX' | 'overflowY'
    > {
  children: React.ReactNode;
}

export const AppLayoutContent: React.FC<AppLayoutContentProps> = ({
  as = 'main',
  children,
  padding = 'layout-xxs',
  overflow,
  overflowX,
  overflowY = 'auto',
  style,
}) => (
  <Grid.Item
    gridArea="app-content"
    as={as}
    padding={padding}
    overflow={overflow}
    overflowX={overflowX}
    overflowY={overflowY}
    style={style}
  >
    {children}
  </Grid.Item>
);
