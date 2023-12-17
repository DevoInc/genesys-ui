import * as React from 'react';

import { SelectControl, InputControl, SelectOption } from '@devoinc/genesys-ui';

type RuleProps = {
  options: SelectOption[];
  defaultValue: string;
  label: string;
  placeholder: string;
  type?: 'number';
};

export const Rule: React.FC<RuleProps> = ({
  options = [],
  defaultValue,
  label = 'Filter this column',
  placeholder = 'Filter by text...',
  type,
}) => {
  return (
    <>
      <SelectControl
        menuAppendToBody
        defaultInputValue={defaultValue}
        options={options}
      />
      <InputControl
        autoFocus
        aria-label={label}
        placeholder={placeholder}
        type={type}
      />
    </>
  );
};
