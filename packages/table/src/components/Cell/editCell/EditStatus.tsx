import * as React from 'react';
import { SelectControl } from '@devoinc/genesys-ui';
import { CellEditorProps } from '../declarations';

export const EditStatus: React.FC<CellEditorProps> = ({ value, onChange }) => (
  <SelectControl
    maxMenuHeight={19.2}
    menuIsOpen
    menuQuiet
    onChange={(newStatus) => onChange?.(newStatus)}
    value={value}
  />
);
