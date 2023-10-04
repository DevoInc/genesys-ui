import React, { FormEvent } from 'react';
import { InputControl } from '@devoinc/genesys-ui';

interface EditInputProps {
  // Text Edit Cell accepts any value type as it is the default edit cell
  value: any;
  onChange?: (newValue: string) => void;
}

export const EditText: React.FC<EditInputProps> = ({ value, onChange }) => (
  <InputControl
    type={'text'}
    aria-label={'Text input'}
    value={value}
    onChange={(event: FormEvent) =>
      onChange?.((event.target as HTMLInputElement).value)
    }
    autoFocus
  />
);
