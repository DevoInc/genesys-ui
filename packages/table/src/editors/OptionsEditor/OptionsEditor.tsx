import * as React from 'react';

import { SelectControl } from '@devoinc/genesys-ui';

import { EditorFloatingWrapper } from '../components';
import type { CellEditorProps } from '../../declarations';
import { ContextOptions, getSelectOptions } from '../../facade';

export const OptionsEditor: React.FC<CellEditorProps> = ({
  value,
  onChange,
  colDef,
}) => {
  const options = (colDef?.context as ContextOptions)?.options;

  return (
    <EditorFloatingWrapper>
      <SelectControl
        onChange={onChange}
        value={String(value)}
        creatable
        isMulti={Array.isArray(value)}
        menuAppendToBody
        options={getSelectOptions(options)}
        autoFocus
      />
    </EditorFloatingWrapper>
  );
};
