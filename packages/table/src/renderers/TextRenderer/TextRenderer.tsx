import * as React from 'react';

import { Typography } from '@devoinc/genesys-ui';

import type { TCellRenderer } from '../../declarations';

export const TextRenderer: React.FC<TCellRenderer> = ({ colDef, value }) => {
  const truncateLine =
    colDef?.truncateLine !== undefined ? colDef.truncateLine : 1;
  const textAlign =
    (colDef?.context?.textAlign as React.CSSProperties['textAlign']) ?? 'left';
  return (
    <Typography.Paragraph
      as="div"
      truncateLine={truncateLine}
      gutterBottom="0"
      tooltip={String(value)}
      textAlign={textAlign}
    >
      {value as string}
    </Typography.Paragraph>
  );
};
