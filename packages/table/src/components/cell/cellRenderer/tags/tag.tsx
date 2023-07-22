import * as React from 'react';

import { Tag } from '@devoinc/genesys-ui';
import { CellProps } from '../../declarationsfake';

export const RenderCellContentStatus: React.FC<CellProps> = ({
  value,
  columnDef,
}) => {
  const conf = columnDef.statusConfig[value] || {};
  const cellText = conf.text || value;
  return <Tag colorScheme={conf.color} text={cellText} icon={conf.iconName} />;
};
