import React, { FormEvent } from 'react';
import { TextareaControl } from '@devoinc/genesys-ui';

import type { TCellEditor } from '../../declarations';

import { EditorFloatingWrapper } from '../components';
import { TContextTextEditorParams } from '../TextEditor';

export const TextAreaEditor: React.FC<TCellEditor> = ({ value, onChange, colDef }) => (
  <EditorFloatingWrapper>
    <TextareaControl
      rows={6}
      aria-label={
        (colDef?.context as TContextTextEditorParams)?.texts?.editorLabel ?? value as string
      }
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
