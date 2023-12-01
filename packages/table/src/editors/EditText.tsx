import React, { FormEvent } from 'react';
import { InputControl } from '@devoinc/genesys-ui';
import { TableContext } from '../core/Table/context';

interface EditInputProps {
  // Text Edit Cell accepts any value type as it is the default edit cell
  value: any;
  onChange?: (newValue: string) => void;
}

export const EditText: React.FC<EditInputProps> = ({ value, onChange }) => {
  const { texts } = React.useContext(TableContext);
  return (
    <InputControl
      autoFocus
      aria-label={texts?.editor?.editorTextLabel}
      value={value}
      onChange={(event: FormEvent) =>
        onChange?.((event.target as HTMLInputElement).value)
      }
    />
  );
};
