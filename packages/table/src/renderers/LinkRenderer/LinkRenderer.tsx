import * as React from 'react';

import { Link } from '@devoinc/genesys-ui';
import type { TCellRenderer } from '../../declarations';

export const LinkRenderer: React.FC<TCellRenderer> = ({ value }) => (
  <Link href={String(value)} tooltip={String(value)} lineClamp={1} target={'_blank'}>
    {String(value)}
  </Link>
);
