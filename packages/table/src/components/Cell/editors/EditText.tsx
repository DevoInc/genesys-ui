import React, { FormEvent } from 'react';
import { InputControl } from '@devoinc/genesys-ui';

interface EditInputProps {
  value: string | number;
  onChange?: (newValue: string) => void;
}

export const EditInput: React.FC<EditInputProps> = ({ value, onChange }) => (
  <InputControl
    type={'text'}
    aria-label={'Text input'}
    value={value.toString()}
    onChange={(event: FormEvent) =>
      onChange?.((event.target as HTMLInputElement).value)
    }
  />
);
