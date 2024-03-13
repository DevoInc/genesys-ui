import * as React from 'react';

import {
  SelectControl,
  InputControl,
  TSelectOption,
} from '@devoinc/genesys-ui';

type FilterRuleProps = {
  options: TSelectOption[];
  defaultValue: string;
  label: string;
  placeholder: string;
  type?: 'number';
};

export const FilterRule: React.FC<FilterRuleProps> = ({
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
