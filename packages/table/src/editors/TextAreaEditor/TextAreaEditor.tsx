import React, { FormEvent } from 'react';
import { TextareaControl } from '@devoinc/genesys-ui';
import { EditorFloatingWrapper } from '../components';
import { CellEditorProps } from '../declarations';

export const TextAreaEditor: React.FC<CellEditorProps> = ({
  value,
  onChange,
}) => (
  <EditorFloatingWrapper>
    <TextareaControl
      rows={6}
      aria-label={'TextArea input'}
      value={String(value)}
      onChange={(event: FormEvent) => {
        if (onChange) {
          onChange((event.target as HTMLInputElement).value);
        }
      }}
      autoFocus
    />
  </EditorFloatingWrapper>
);
