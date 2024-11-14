import * as React from 'react';
import { SwitchControl } from '@devoinc/genesys-ui';

import type { TCellEditor } from '../../declarations';
import { TContextTextEditorParams } from '../TextEditor';

export const BooleanEditor: React.FC<TCellEditor> = ({ value, onChange, colDef }) => (
  <SwitchControl
    size="sm"
    checked={!!value}
    aria-label={
      (colDef?.context as TContextTextEditorParams)?.texts?.editorLabel ?? value as string
    }
    onChange={() => {
      if (onChange) {
        onChange(!value);
      }
    }}
  />
);
