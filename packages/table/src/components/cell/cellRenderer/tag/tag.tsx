import * as React from 'react';

import { Tag } from '@devoinc/genesys-ui';
import { ColDef } from '../../declarations';

interface TagsProps {
  value?: any;
  columnDef?: ColDef;
}

export const RenderCellContentTag: React.FC<TagsProps> = ({
  value,
  columnDef,
}) => {
  const conf = columnDef.tagConfig[value] || {
    text: '',
    colorScheme: 'neutral',
  };
  return (
    <Tag
      colorScheme={conf.colorScheme}
      text={conf.text || value}
      icon={conf.icon}
      styles={columnDef.cellStyle}
    />
  );
};
