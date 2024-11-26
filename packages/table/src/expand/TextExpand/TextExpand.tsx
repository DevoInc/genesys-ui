import * as React from 'react';
import { Typography } from '@devoinc/genesys-ui';

import type { TCellExpand } from '../../declarations';

export const TextExpand: React.FC<TCellExpand> = ({
  value,
}) => {
  return (
    <Typography.Paragraph
      as="div"
      gutterBottom="0"
      tooltip={String(value)}
    >
      {value as string}
    </Typography.Paragraph>
  );
};
