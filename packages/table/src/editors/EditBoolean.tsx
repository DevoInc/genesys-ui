import * as React from 'react';
import { SwitchControl } from '@devoinc/genesys-ui';

interface GenericCellEditorProps {
  value: unknown;
  onChange: (newValue: unknown) => void;
}

export const EditBoolean: React.FC<GenericCellEditorProps> = ({
  value,
  onChange,
}) => {
  return (
    <SwitchControl
      autoFocus
      checked={!!value}
      aria-label={'Switch'}
      onChange={() => onChange(!value)}
    />
  );
};
