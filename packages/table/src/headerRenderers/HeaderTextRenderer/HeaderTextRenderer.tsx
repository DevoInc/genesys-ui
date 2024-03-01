import * as React from 'react';

import { Typography } from '@devoinc/genesys-ui';

import type { HeaderRendererProps } from '../../declarations';

export const HeaderTextRenderer: React.FC<HeaderRendererProps> = ({
  colDef,
}) => (
  <Typography.Heading size="h6" truncateLine={1}>
    {colDef.headerName}
  </Typography.Heading>
);
