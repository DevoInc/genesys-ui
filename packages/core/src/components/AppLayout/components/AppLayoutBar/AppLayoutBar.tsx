import * as React from 'react';
import { useTheme } from 'styled-components';

import { Grid } from '../../../Grid';
import type {
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';

export interface AppLayoutBarProps
  extends IStyledOverloadCss,
    IStyledPolymorphic {
  children: React.ReactNode;
}

export const AppLayoutBar: React.FC<AppLayoutBarProps> = ({
  as = 'header',
  children,
  style,
}) => {
  const theme = useTheme();
  return (
    <Grid.Item
      as={as}
      gridArea="app-bar"
      style={style}
      zIndex={theme.cmp.appLayout.bar.elevation.zIndex}
    >
      {children}
    </Grid.Item>
  );
};
