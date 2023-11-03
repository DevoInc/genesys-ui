import React, { FormEvent } from 'react';
import { InputControl } from '@devoinc/genesys-ui';

interface EditNumberProps {
  value: number;
  onChange: (newValue: number) => void;
}

export const EditNumber: React.FC<EditNumberProps> = ({ value, onChange }) => (
  <InputControl
    type={'number'}
    aria-label={'Number input'}
    value={value}
    onChange={(event: FormEvent) => {
      debugger;
      onChange(parseInt((event.target as HTMLInputElement).value));
    }}
    autoFocus
  />
);
