import * as React from 'react';

import { Typography } from '@devoinc/genesys-ui';

import { HeaderRendererProps } from '../declarations';

export const HeaderBulkRenderer: React.FC<HeaderRendererProps> = () => (
  <Typography.Paragraph as="div" gutterBottom="0">
    Bulk
  </Typography.Paragraph>
);
