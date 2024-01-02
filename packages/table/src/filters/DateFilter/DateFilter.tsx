import * as React from 'react';

import { DateTimePicker } from '@devoinc/genesys-ui-datetime';
import { SelectControl } from '@devoinc/genesys-ui';

import {
  AdvancedFilter,
  BasicFilter,
  dateOptions,
  FilterContainer,
} from '../common';
import { FilterProps } from '../declarations';

export const DateFilter: React.FC<FilterProps> = () => (
  <FilterContainer>
    <BasicFilter>
      <DateTimePicker
        size="sm"
        onApply={() => undefined}
        onCancel={() => undefined}
      />
    </BasicFilter>
    <AdvancedFilter>
      <SelectControl
        menuAppendToBody
        // onChange={(opt: SelectOption) => setValue(opt.value)}
        options={dateOptions}
        // value={value}
      />
      <DateTimePicker onApply={() => undefined} onCancel={() => undefined} />
    </AdvancedFilter>
  </FilterContainer>
);
