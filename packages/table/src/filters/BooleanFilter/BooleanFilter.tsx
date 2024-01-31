import * as React from 'react';

import { SelectControl, SelectOption } from '@devoinc/genesys-ui';

import type { FilterContext, FilterProps } from '../declarations';
import { BasicFilter, BOOLEAN_OPTIONS, FilterContainer } from '../common';
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
          onChange={(option: SelectOption | null) => {
            onChange(
              {
                value: option === null ? '' : option.value,
              } as BooleanFilterValue,
              'boolean',
            );
          }}
          options={BOOLEAN_OPTIONS}
          value={value}
          isClearable
        />
      </BasicFilter>
    </FilterContainer>
  );
};
