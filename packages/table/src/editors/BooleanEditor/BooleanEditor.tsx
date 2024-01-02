import * as React from 'react';
import { SwitchControl } from '@devoinc/genesys-ui';

interface GenericCellEditorProps {
  value: unknown;
  onChange: (newValue: unknown) => void;
}

export const BooleanEditor: React.FC<GenericCellEditorProps> = ({
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
