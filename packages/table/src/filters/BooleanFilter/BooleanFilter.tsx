import * as React from 'react';

import { SelectControl } from '@devoinc/genesys-ui';

import { FilterProps } from '../declarations';
import { BasicFilter, booleanOptions, FilterContainer } from '../common';

export const BooleanFilter: React.FC<FilterProps> = () => {
  const [value, setValue] = React.useState('all');
  return (
    <FilterContainer>
      <BasicFilter>
        <SelectControl
          size="sm"
          menuAppendToBody
          onChange={() => setValue('fake')}
          options={booleanOptions}
          value={value}
        />
      </BasicFilter>
      {/*<AdvancedFilter>Boolean Advanced Filter</AdvancedFilter>*/}
    </FilterContainer>
  );
};
