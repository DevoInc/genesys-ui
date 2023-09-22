import React, { FormEvent } from 'react';
import { InputControl } from '@devoinc/genesys-ui';
import { CellData } from '../../declarations';

interface EditInputProps {
  // Text Edit Cell accepts any value type as it is the default edit cell
  value: CellData;
  onChange?: (newValue: string) => void;
}

export const EditText: React.FC<EditInputProps> = ({ value, onChange }) => (
  <InputControl
    type={'text'}
    aria-label={'Text input'}
    value={value.toString()}
    onChange={(event: FormEvent) =>
      onChange?.((event.target as HTMLInputElement).value)
    }
    autoFocus
  />
);
