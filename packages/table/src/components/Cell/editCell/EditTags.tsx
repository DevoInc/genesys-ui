import * as React from 'react';
import { SelectControl } from '@devoinc/genesys-ui';

export const EditTags = (value) => {
  const [valueTransform, setValue] = React.useState(
    value &&
      value.map((el) => ({
        value: el.text,
        label: el.text,
      }))
  );
  const onChange = (newValue = []) => {
    debugger;
    // setValue(newValue);

    // const parsedNewValue = newValue.map((opt) => ({ text: opt.value }));
    // const newRow = setObjectValue(row, column.dataKey, parsedNewValue);
    // onChangeUnsavedRow(newRow);
  };
  return (
    <SelectControl
      onChange={onChange}
      value={valueTransform}
      creatable
      isMulti
      menuAppendToBody
    />
  );
};
