import * as React from 'react';

import { SelectControl, type TSelectOption } from '@devoinc/genesys-ui';

import type { TFilterContext, TFilter } from '../../declarations';
import type { TUserFilterValue } from './declarations';
import { FilterContainer } from '../common';
import { TContextUser } from '../../renderers';

export const UserFilter: React.FC<TFilter> = ({ colDef, onChange }) => {
  const context = colDef?.context as TContextUser & TFilterContext;
  const options = Object.values(context?.userMapping ?? {}).map((user) => {
    return {
      value: Object.values(user).join(' '),
      label: user.name,
    } as TSelectOption;
  });
  const filterValue = context?.filterValue as TUserFilterValue;
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
          onChange({ value: val } as TUserFilterValue, 'options');
        }}
        menuAppendToBody
        defaultInputValue={colDef?.context?.defaultValue as string}
        options={options}
        value={value}
      />
    </FilterContainer>
  );
};
