import * as React from 'react';

import { SelectControl, SelectOption } from '@devoinc/genesys-ui';

import type { FilterContext, FilterProps } from '../declarations';
import { BasicFilter, booleanOptions, FilterContainer } from '../common';
import type { BooleanFilterValue } from './declarations';

export const BooleanFilter: React.FC<FilterProps> = ({ onChange, colDef }) => {
  const context = colDef?.context as FilterContext;
  const filterValue = context?.filterValue as BooleanFilterValue;
  const value = filterValue?.value ?? '';
  return (
    <FilterContainer>
      <BasicFilter>
        <SelectControl
          size="sm"
          menuAppendToBody
          onChange={(option: SelectOption) => {
            onChange({ value: option.value } as BooleanFilterValue, 'boolean');
          }}
          options={booleanOptions}
          value={value}
        />
      </BasicFilter>
    </FilterContainer>
  );
};
