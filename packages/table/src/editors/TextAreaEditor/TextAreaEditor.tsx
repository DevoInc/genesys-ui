import React, { FormEvent } from 'react';
import { TextareaControl } from '@devoinc/genesys-ui';

import type { TCellEditor } from '../../declarations';

import { EditorFloatingWrapper } from '../components';

export const TextAreaEditor: React.FC<TCellEditor> = ({ value, onChange }) => (
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
