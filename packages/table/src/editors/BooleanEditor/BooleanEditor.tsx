import * as React from 'react';
import { SwitchControl } from '@devoinc/genesys-ui';
import { CellEditorProps } from '../declarations';

export const BooleanEditor: React.FC<CellEditorProps> = ({
  value,
  onChange,
}) => (
  <SwitchControl
    size="sm"
    autoFocus
    checked={!!value}
    aria-label={'Switch'}
    onChange={() => {
      if (onChange) {
        onChange(!value);
      }
    }}
  />
);
