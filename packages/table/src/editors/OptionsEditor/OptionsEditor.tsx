import * as React from 'react';

import { SelectControl } from '@devoinc/genesys-ui';

import { EditorFloatingWrapper } from '../components';
import type { TCellEditor } from '../../declarations';
import { type TContextOptions, getSelectOptions } from '../../facade';

export const OptionsEditor: React.FC<TCellEditor> = ({
  value,
  onChange,
  colDef,
}) => {
  const options = (colDef?.context as TContextOptions)?.options;

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
