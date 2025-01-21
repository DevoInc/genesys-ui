import * as React from 'react';

import { SelectControl, type TSelectOption } from '@devoinc/genesys-ui';

import type { TFilterContext, TFilter } from '../../declarations';
import type { TUserFilterValue } from './declarations';
import { FilterContainer } from '../common';
import { TContextUser } from '../../renderers';
import { concatenateValues } from './util';

export const UserFilter: React.FC<TFilter> = ({ colDef, onChange }) => {
  const context = colDef?.context as TContextUser & TFilterContext;
  const keys = Object.keys(context?.userMapping ?? {});
  const concatedOptions = concatenateValues(context?.userMapping ?? {});
  const options = Object.values(context?.userMapping ?? {}).map(
    (user, index) => {
      return {
        value: keys[index],
        label: user.name,
        description: user.subtitle,
      } as TSelectOption;
    },
  );
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
        filterOption={(option, value) => {
          const optionValue = option.value;
          return concatedOptions[optionValue].includes(
            String(value).toLowerCase(),
          );
        }}
      />
    </FilterContainer>
  );
};
