import React, { FormEvent } from 'react';
import { InputControl } from '@devoinc/genesys-ui';
import { TableContext } from '../core/Table/context';
import { getEditControlSize } from './utils';

type EditInputProps = {
  value: any;
  onChange?: (value: string) => void;
};

export const EditText: React.FC<EditInputProps> = ({ value, onChange }) => {
  const { texts, visualOptions } = React.useContext(TableContext);
  return (
    <InputControl.Input
      size={getEditControlSize(visualOptions)}
      autoFocus
      aria-label={texts?.editor?.editorTextLabel}
      value={value}
      onChange={(event: FormEvent) =>
        onChange?.((event.target as HTMLInputElement).value)
      }
    />
  );
};
