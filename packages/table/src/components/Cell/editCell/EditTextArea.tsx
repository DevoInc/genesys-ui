import * as React from 'react';
import { TextareaControl } from '@devoinc/genesys-ui';

export const EditTextArea = (value) => {
  const onChange = (e) => {
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
    value,
    onChange,
  };
  return <TextareaControl aria-label={'hola'} rows={6} {...commonProps} />;
};
