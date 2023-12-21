import React, { FormEvent } from 'react';
import { TextareaControl } from '@devoinc/genesys-ui';
import { EditorFloatingWrapper } from '../components';

type EditTextAreaProps = {
  value: unknown;
  onChange?: (newValue: string) => void;
};

export const TextAreaEditor: React.FC<EditTextAreaProps> = ({
  value,
  onChange,
}) => (
  <EditorFloatingWrapper>
    <TextareaControl
      rows={6}
      aria-label={'TextArea input'}
      value={value.toString()}
      onChange={(event: FormEvent) => {
        if (onChange) {
          onChange((event.target as HTMLInputElement).value);
        }
      }}
      autoFocus
    />
  </EditorFloatingWrapper>
);