import * as React from 'react';
import { SelectControl } from '@devoinc/genesys-ui';

export const EditStatus = (value) => {
  debugger;
  const options = value.map((v) => ({
    value: v.text,
    label: v.text,
    color: v.colorScheme,
  }));
  const onChange = (opt) => {
    debugger;
    // const newRow = setObjectValue(row, column.dataKey, opt.value);
    // onChangeUnsavedRow(newRow, true);
  };
  return (
    <SelectControl
      maxMenuHeight={19.2}
      menuIsOpen
      menuQuiet
      onChange={onChange}
      options={options}
      value={value}
    />
  );
};
