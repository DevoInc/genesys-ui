import * as React from 'react';
import { useTheme } from 'styled-components';

import { Grid } from '../Grid';
import { AppLayoutBar, AppLayoutContent, AppLayoutLead } from './components';

export interface AppLayoutProps {
  children: React.ReactNode;
}

export const InternalAppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <Grid
      gridTemplateAreas='"app-bar" "app-lead" "app-content"'
      gridTemplateRows="auto auto 1fr"
      style={{
        width: theme.cmp.appLayout.size.width,
        height: theme.cmp.appLayout.size.height,
        backgroundColor: theme.cmp.appLayout.color.background,
        overflow: 'hidden',
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
