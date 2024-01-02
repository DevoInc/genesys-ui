import * as React from 'react';

import { Typography } from '@devoinc/genesys-ui';

import { CellRendererProps } from '../declarations';

export const TextRenderer: React.FC<CellRendererProps> = ({
  colDef,
  value,
}) => {
  const truncateLine =
    colDef?.truncateLine || (colDef?.preset === 'longText' ? 2 : 1);
  return (
    <Typography.Paragraph as="div" truncateLine={truncateLine} gutterBottom="0">
      {value as string}
    </Typography.Paragraph>
  );
};
