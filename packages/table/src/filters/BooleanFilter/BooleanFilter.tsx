import * as React from 'react';

import { SelectControl, SelectOption } from '@devoinc/genesys-ui';

import { FilterProps } from '../declarations';
import {
  AdvancedFilter,
  BasicFilter,
  booleanOptions,
  FilterContainer,
} from '../common';

export const BooleanFilter: React.FC<FilterProps> = () => {
  const [value, setValue] = React.useState('all');
  return (
    <FilterContainer>
      <BasicFilter>
        <SelectControl
          size="sm"
          menuAppendToBody
          //onChange={(e: SelectOption) => setValue(e.target.value)}
          options={booleanOptions}
          value={value}
        />
      </BasicFilter>
      {/*<AdvancedFilter>Boolean Advanced Filter</AdvancedFilter>*/}
    </FilterContainer>
  );
};
