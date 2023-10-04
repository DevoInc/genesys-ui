import * as React from 'react';
import { Link } from '@devoinc/genesys-ui';

interface LinkProps {
  value: unknown;
}

export const linkFormatter: React.FC<LinkProps> = (value) => {
  return (
    <Link href={String(value)} tooltip={String(value)}>
      {String(value)}
    </Link>
  );
};
