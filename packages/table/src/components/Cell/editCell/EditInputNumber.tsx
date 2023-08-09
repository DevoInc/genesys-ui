import React from 'react';

import { InputControl } from '@devoinc/genesys-ui';

export const EditInputNumber = (value) => {
  debugger;
  //const defaultValue = getObjectValue(row, column.dataKey);

  const onChange = (e) => {
    debugger;
    // const newValue = e.target.value;
    // if (newValue === defaultValue) {
    //   resetUnsavedRow();
    // } else {
    //   const newRow = setObjectValue(row, column.dataKey, newValue);
    //   onChangeUnsavedRow(newRow);
    // }
  };

  const commonProps = {
    hideLabel: true,
    defaultValue: value,
    onChange,
  };
  return <InputControl type={'number'} aria-label={'hola'} {...commonProps} />;
};
