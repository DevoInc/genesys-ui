import * as React from 'react';

import { SelectControl } from '@devoinc/genesys-ui';

import { ROW_HEIGHT_MD } from '../../constants';
import type { TCellEditor } from '../../declarations';
import { TableContext } from '../../context';
import { getSelectOptions } from '../../helpers';
import type { TContextOptions } from '../../renderers';
import { TContextTextEditorParams } from '../TextEditor';

export const OptionsEditor: React.FC<TCellEditor> = ({
  value,
  onChange,
  colDef,
}) => {
  const options = (colDef?.context as TContextOptions)?.options;
  const { density, rowHeight } = React.useContext(TableContext);
  const isMultiple = Array.isArray(value);
  return (
    <SelectControl
      defaultMenuIsOpen
      hideSelectedOptions={!isMultiple}
      onChange={(event) => {
        onChange(event.value);
      }}
      value={String(value)}
      creatable
      isMulti={isMultiple}
      multipleSubtle={isMultiple}
      menuAppendToBody
      options={getSelectOptions(options)}
      autoFocus
      size={density === 'compact' && rowHeight <= ROW_HEIGHT_MD ? 'sm' : 'md'}
      aria-label={
        (colDef?.context as TContextTextEditorParams)?.texts?.editorLabel ??
        (value as string)
      }
    />
  );
};
