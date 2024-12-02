import * as React from 'react';

import { Typography } from '@devoinc/genesys-ui';

import type { TCellRenderer } from '../../declarations';
import type { TContextText } from './declarations';

export const TextRenderer: React.FC<TCellRenderer> = ({ colDef, value }) => {
  const context: TContextText = colDef?.context ?? {};
  const textAlign = context.textAlign ?? 'left';
  return (
    <Typography.Paragraph
      as="div"
      truncateLine={colDef?.truncateLine}
      gutterBottom="0"
      tooltip={String(value)}
      textAlign={textAlign}
    >
      {value as string}
    </Typography.Paragraph>
  );
};
