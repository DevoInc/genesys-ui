import * as React from 'react';

import { Grid } from '../../../Grid';
import type { IStyleAttr, IStyledPolymorphic } from '../../../../declarations';

export interface AppLayoutBarProps extends IStyleAttr, IStyledPolymorphic {
  children: React.ReactNode;
}

export const AppLayoutBar: React.FC<AppLayoutBarProps> = ({
  as = 'header',
  children,
  style,
}) => {
  return (
    <Grid.Item
      as={as}
      gridArea="app-bar"
      style={style}
      zIndex="var(--cmp-app-layout-bar-elevation-z-index)"
    >
      {children}
    </Grid.Item>
  );
};
