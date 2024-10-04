import * as React from 'react';

import { SelectControl } from '@devoinc/genesys-ui';

import { ROW_HEIGHT_MD } from '../../constants';
import type { TCellEditor } from '../../declarations';
import { TableContext } from '../../context';
import { type TContextOptions, getSelectOptions } from '../../facade';

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
      onChange={onChange}
      value={String(value)}
      creatable
      isMulti={isMultiple}
      multipleSubtle={isMultiple}
      menuAppendToBody
      options={getSelectOptions(options)}
      autoFocus
      size={density === 'compact' && rowHeight <= ROW_HEIGHT_MD ? 'sm' : 'md'}
    />
  );
};
