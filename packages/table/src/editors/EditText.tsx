import React, { FormEvent } from 'react';
import { InputControl } from '@devoinc/genesys-ui';
import { TableContext } from '../core/Table/context';

type EditInputProps = {
  value: any;
  onChange?: (value: string) => void;
};

export const EditText: React.FC<EditInputProps> = ({ value, onChange }) => {
  const { texts } = React.useContext(TableContext);
  return (
    <InputControl.Input
      autoFocus
      aria-label={texts?.editor?.editorTextLabel}
      value={value}
      onChange={(event: FormEvent) =>
        onChange?.((event.target as HTMLInputElement).value)
      }
    />
  );
};
