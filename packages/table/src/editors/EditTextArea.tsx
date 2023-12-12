import React, { FormEvent } from 'react';
import { TextareaControl } from '@devoinc/genesys-ui';
import { EditorFloatingWrapper } from './components';

interface EditTextAreaProps {
  value: string | number;
  onChange?: (newValue: string) => void;
}

export const EditTextArea: React.FC<EditTextAreaProps> = ({
  value,
  onChange,
}) => (
  <EditorFloatingWrapper>
    <TextareaControl
      rows={6}
      aria-label={'TextArea input'}
      value={value.toString()}
      onChange={(event: FormEvent) =>
        onChange?.((event.target as HTMLInputElement).value)
      }
      autoFocus
    />
  </EditorFloatingWrapper>
);
