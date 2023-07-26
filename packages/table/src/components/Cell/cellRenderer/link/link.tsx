import * as React from 'react';
import { Link } from '@devoinc/genesys-ui';

interface LinkProps {
  value: string;
}

export const RenderCellContentLink: React.FC<LinkProps> = ({ value }) => {
  return (
    <Link href={value} tooltip={value}>
      {value}
    </Link>
  );
};
