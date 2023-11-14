import * as React from 'react';
import { Tag } from '@devoinc/genesys-ui';

import { ColDef } from '../../declarations';

interface TagProps {
  value?: any;
  columnDef?: ColDef;
}

export const TagRenderer: React.FC<TagProps> = ({ value, columnDef }) => {
  return (
    <Tag
      colorScheme={columnDef.cellRendererConfig[value]?.color}
      text={columnDef.cellRendererConfig[value]?.text}
      icon={columnDef.cellRendererConfig[value]?.icon}
    />
  );
};
