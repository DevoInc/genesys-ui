import * as React from 'react';
import { Typography } from '@devoinc/genesys-ui';
import { ColDef } from '../../declarations';

interface TextProps {
  value: any;
  columnDef?: ColDef;
}

export const TextRenderer = ({ columnDef, value }: TextProps) => {
  const truncateLine =
    columnDef?.cellStyle?.truncateLine || columnDef.type === 'longText' ? 2 : 1;
  return (
    <Typography.Paragraph as="div" truncateLine={truncateLine}>
      {value}
    </Typography.Paragraph>
  );
};
