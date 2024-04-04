import * as React from 'react';

import { InputControl } from '@devoinc/genesys-ui';

import { ROW_HEIGHT_MD } from '../../constants';
import type { TCellEditor } from '../../declarations';
import { TableContext } from '../../context/TableContext';

export type TContextTextEditorParams = {
  texts: {
    editorLabel: string;
  };
};

export const TextEditor: React.FC<TCellEditor> = ({
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
        (colDef?.context as TContextTextEditorParams)?.texts?.editorLabel
      }
      value={String(value)}
      onChange={(event: React.FormEvent) =>
        onChange?.((event.target as HTMLInputElement).value)
      }
    />
  );
};
