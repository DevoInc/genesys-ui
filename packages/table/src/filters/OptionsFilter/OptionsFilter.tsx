import * as React from 'react';

import { SelectControl, type SelectOption } from '@devoinc/genesys-ui';

import type { FilterContext, FilterProps } from '../declarations';
import type { OptionsFilterValue } from './declarations';
import { FilterContainer } from '../common';
import { ContextOptions, getSelectOptions } from '../../facade';

export const OptionsFilter: React.FC<FilterProps> = ({ colDef, onChange }) => {
  const context = colDef?.context as ContextOptions & FilterContext;
  const options = context?.options ?? {};
  const filterValue = context?.filterValue as OptionsFilterValue;
  const value = filterValue?.value ?? '';
  return (
    <FilterContainer>
      <SelectControl
        isMulti
        multipleSubtle
        menuIsOpen
        closeMenuOnSelect={false}
        selectAllBtn
        hideSelectedOptions={false}
        onChange={(val: SelectOption[]) => {
          onChange({ value: val } as OptionsFilterValue, 'options');
        }}
        menuAppendToBody
        defaultInputValue={colDef?.context?.defaultValue as string}
        options={getSelectOptions(options)}
        value={value}
      />
    </FilterContainer>
  );
};
