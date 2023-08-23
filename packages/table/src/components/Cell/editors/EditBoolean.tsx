import * as React from 'react';
import { SwitchControl } from '@devoinc/genesys-ui';
import { CellEditorProps } from '../declarations';

export const EditBoolean: React.FC<CellEditorProps> = ({ value, onChange }) => {
  return (
    <SwitchControl
      checked={!!value}
      aria-label={'Switch'}
      onChange={() => onChange?.(!value)}
    />
  );
};
