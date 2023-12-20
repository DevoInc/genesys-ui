import * as React from 'react';

import { Link } from '@devoinc/genesys-ui';
import { CellRendererProps } from '../declarations';

export const LinkRenderer: React.FC<CellRendererProps> = ({ value }) => (
  <Link href={String(value)} tooltip={String(value)} lineClamp={1}>
    {String(value)}
  </Link>
);
