import * as React from 'react';
import { useTheme } from 'styled-components';

import { Grid } from '../../../Grid';

export interface AppLayoutContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<AppLayoutContainerProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <Grid
      gridTemplateAreas='"app-bar" "app-lead" "app-content"'
      gridTemplateRows="auto auto 1fr"
      styles={{
        width: '100%',
        height: '100vh',
        backgroundColor: theme.alias.color.background.app,
        overflow: 'hidden',
      }}
    >
      {children}
    </Grid>
  );
};
