import * as React from 'react';
import { Typography } from '@devoinc/genesys-ui';
import { CellRendererProps } from '../declarations';

export const TextRenderer = ({ colDef, value }: CellRendererProps) => {
  const truncateLine =
    colDef?.cellStyle?.truncateLine || (colDef?.preset === 'longText' ? 2 : 1);
  return (
    <Typography.Paragraph as="div" truncateLine={truncateLine} gutterBottom="0">
      {value as string}
    </Typography.Paragraph>
  );
};
