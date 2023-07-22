import * as React from 'react';
import { Link } from '@devoinc/genesys-ui';

import { CellProps } from '../../declarationsfake';

export const RenderCellContentLink: React.FC<CellProps> = ({ value }) => {
  return (
    <Link href={value} tooltip={value}>
      {value}
    </Link>
  );
};
