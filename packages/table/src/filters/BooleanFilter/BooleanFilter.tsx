import * as React from 'react';

import { SelectControl, type TSelectOption } from '@devoinc/genesys-ui';

import type { TFilterContext, TFilter } from '../../declarations';
import { BasicFilter, BOOLEAN_OPTIONS, FilterContainer } from '../common';
import type { TBooleanFilterValue } from './declarations';

export const BooleanFilter: React.FC<TFilter> = ({ onChange, colDef }) => {
  const context = colDef?.context as TFilterContext;
  const filterValue = context?.filterValue as TBooleanFilterValue;
  const value = filterValue?.value ?? '';
  return (
    <FilterContainer>
      <BasicFilter>
        <SelectControl
          size="sm"
          menuAppendToBody
          onChange={(option: TSelectOption | null) => {
            onChange(
              {
                value: option === null ? '' : option.value,
              } as TBooleanFilterValue,
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
