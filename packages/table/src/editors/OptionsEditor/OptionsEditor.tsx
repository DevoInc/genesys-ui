import * as React from 'react';

import { SelectControl, SelectOption } from '@devoinc/genesys-ui';

import { EditorFloatingWrapper } from '../components';
import { CellEditorProps } from '../declarations';
import { getOptionsFromData } from '../../filters/OptionsFilter/getOptionsFromData';

export const OptionsEditor: React.FC<CellEditorProps> = ({
  value,
  onChange,
  colDef,
  data = [],
}) => {
  const options =
    (colDef?.cellEditorParams?.options as SelectOption[]) ??
    (getOptionsFromData(data, colDef) as SelectOption[]);

  return (
    <EditorFloatingWrapper>
      <SelectControl
        onChange={onChange}
        value={value as SelectOption}
        creatable
        isMulti
        menuAppendToBody
        options={options}
        autoFocus
      />
    </EditorFloatingWrapper>
  );
};
