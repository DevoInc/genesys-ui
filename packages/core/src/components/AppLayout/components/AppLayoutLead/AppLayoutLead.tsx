import * as React from 'react';

import { Grid } from '../../../Grid';
import type { IStyleAttr, IStyledPolymorphic } from '../../../../declarations';

export interface AppLayoutLeadProps extends IStyleAttr, IStyledPolymorphic {
  children: React.ReactNode;
}

export const AppLayoutLead: React.FC<AppLayoutLeadProps> = ({
  as,
  children,
  style,
}) => (
  <Grid.Item as={as} gridArea="app-lead" overflowX="auto" style={style}>
    {children}
  </Grid.Item>
);
