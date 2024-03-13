import * as React from 'react';

import { SelectControl, type TSelectOption } from '@devoinc/genesys-ui';

import type { FilterContext, FilterProps } from '../../declarations';
import type { OptionsFilterValue } from './declarations';
import { FilterContainer } from '../common';
import { ContextOptions, getTSelectOptions } from '../../facade';

export const OptionsFilter: React.FC<FilterProps> = ({ colDef, onChange }) => {
  const context = colDef?.context as ContextOptions & FilterContext;
  const options = context?.options ?? {};
  const filterValue = context?.filterValue as OptionsFilterValue;
  const value = filterValue?.value ?? '';
  return (
    <FilterContainer>
      <SelectControl
        isMulti
        size="sm"
        multipleSubtle
        closeMenuOnSelect={false}
        selectAllBtn
        hideSelectedOptions={false}
        onChange={(val: TSelectOption[]) => {
          onChange({ value: val } as OptionsFilterValue, 'options');
        }}
        menuAppendToBody
        defaultInputValue={colDef?.context?.defaultValue as string}
        options={getTSelectOptions(options)}
        value={value}
      />
    </FilterContainer>
  );
};
