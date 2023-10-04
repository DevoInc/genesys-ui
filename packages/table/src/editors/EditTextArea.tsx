import React, { FormEvent } from 'react';
import { TextareaControl } from '@devoinc/genesys-ui';

interface EditTextAreaProps {
  value: string | number;
  onChange?: (newValue: string) => void;
}

export const EditTextArea: React.FC<EditTextAreaProps> = ({
  value,
  onChange,
}) => (
  <TextareaControl
    rows={6}
    aria-label={'TextArea input'}
    value={value.toString()}
    onChange={(event: FormEvent) =>
      onChange?.((event.target as HTMLInputElement).value)
    }
    autoFocus
  />
);
