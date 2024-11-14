import React, { FormEvent } from 'react';

import { InputControl } from '@devoinc/genesys-ui';

import type { TCellEditor } from '../../declarations';
import { TContextTextEditorParams } from '../TextEditor';

export const NumberEditor: React.FC<TCellEditor> = ({ value, onChange, colDef }) => (
  <InputControl
    type={'number'}
    aria-label={
      (colDef?.context as TContextTextEditorParams)?.texts?.editorLabel ?? value as string
    }
    value={String(value)}
    onChange={(event: FormEvent) => {
      onChange(parseInt((event.target as HTMLInputElement).value, 10));
    }}
    autoFocus
  />
);
