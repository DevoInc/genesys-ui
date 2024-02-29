import * as React from 'react';

import { InputControl } from '@devoinc/genesys-ui';

import { TableContext } from '../../context/TableContext';
import type { CellEditorProps } from '../../declarations';
import { ROW_HEIGHT_MD } from '../../constants';

export type ContextTextEditorParams = {
  texts: {
    editorLabel: string;
  };
};

export const TextEditor: React.FC<CellEditorProps> = ({
  value,
  onChange,
  colDef,
}) => {
  const { density, rowHeight } = React.useContext(TableContext);
  return (
    <InputControl._Input
      size={density === 'compact' && rowHeight <= ROW_HEIGHT_MD ? 'sm' : 'md'}
      autoFocus
      aria-label={
        (colDef?.context as ContextTextEditorParams)?.texts?.editorLabel
      }
      value={String(value)}
      onChange={(event: React.FormEvent) =>
        onChange?.((event.target as HTMLInputElement).value)
      }
    />
  );
};
