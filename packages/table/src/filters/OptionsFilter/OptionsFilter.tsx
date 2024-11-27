import * as React from 'react';

import { SelectControl, type TSelectOption } from '@devoinc/genesys-ui';

import type { TFilterContext, TFilter } from '../../declarations';
import type { TOptionsFilterValue } from './declarations';
import { FilterContainer } from '../common';
import type { TContextOptions } from '../../renderers';
import { getSelectOptions } from '../../helpers';

export const OptionsFilter: React.FC<TFilter> = ({ colDef, onChange }) => {
  const context = colDef?.context as TContextOptions & TFilterContext;
  const options = context?.options ?? {};
  const filterValue = context?.filterValue as TOptionsFilterValue;
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
          onChange({ value: val } as TOptionsFilterValue, 'options');
        }}
        menuAppendToBody
        defaultInputValue={colDef?.context?.defaultValue as string}
        options={getSelectOptions(options)}
        value={value}
      />
    </FilterContainer>
  );
};
