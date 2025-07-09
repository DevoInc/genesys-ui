import * as React from 'react';

import { Grid } from '../Grid';
import { AppLayoutBar, AppLayoutContent, AppLayoutLead } from './components';
import type { IStyleAttr, IStyledPolymorphic } from '../../declarations';

export interface AppLayoutProps extends IStyledPolymorphic, IStyleAttr {
  children: React.ReactNode;
}

export const InternalAppLayout: React.FC<AppLayoutProps> = ({
  as,
  children,
  style,
}) => {
  return (
    <Grid
      as={as}
      gridTemplateAreas='"app-bar" "app-lead" "app-content"'
      gridTemplateRows="auto auto 1fr"
      style={{
        width: 'var(--cmp-app-layout-size-width)',
        height: 'var(--cmp-app-layout-size-height)',
        backgroundColor: 'var(--cmp-app-layout-color-background)',
        overflow: 'hidden',
        ...style,
      }}
    >
      {children}
    </Grid>
  );
};

export const AppLayout = InternalAppLayout as typeof InternalAppLayout & {
  Bar: typeof AppLayoutBar;
  Content: typeof AppLayoutContent;
  Lead: typeof AppLayoutLead;
};

AppLayout.Bar = AppLayoutBar;
AppLayout.Content = AppLayoutContent;
AppLayout.Lead = AppLayoutLead;

InternalAppLayout.displayName = 'AppLayout';
AppLayout.Bar.displayName = 'AppLayout.Bar';
AppLayout.Content.displayName = 'AppLayout.Content';
AppLayout.Lead.displayName = 'AppLayout.Lead';
