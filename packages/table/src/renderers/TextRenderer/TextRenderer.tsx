import * as React from 'react';

import { Typography } from '@devoinc/genesys-ui';

import type { TCellRenderer } from '../../declarations';

export const TextRenderer: React.FC<TCellRenderer> = ({ colDef, value }) => {
  const truncateLine =
    colDef?.truncateLine || (colDef?.preset === 'longText' ? 2 : 1);
  return (
    <Typography.Paragraph
      as="div"
      truncateLine={truncateLine}
      gutterBottom="0"
      tooltip={String(value)}
    >
      {value as string}
    </Typography.Paragraph>
  );
};
