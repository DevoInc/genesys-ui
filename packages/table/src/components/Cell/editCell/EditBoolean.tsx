import * as React from 'react';
import { SwitchControl } from '@devoinc/genesys-ui';

export const EditBoolean = (value) => {
  // const updateTableData = debounce(
  //   (newRow) => onChangeUnsavedRow(newRow, column.editConf.saveOnChange),
  //   200
  // );
  const onChange = (e) => {
    // const newRow = setObjectValue(row, column.dataKey, !currentVal);
    // updateTableData(newRow);
  };

  return (
    <SwitchControl checked={value} aria-label={value} onChange={onChange} />
  );
};
