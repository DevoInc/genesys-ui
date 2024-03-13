import * as React from 'react';

import { DateTimeFloatingPicker } from '@devoinc/genesys-ui-datetime';
import { SelectControl } from '@devoinc/genesys-ui';

import {
  AdvancedFilter,
  BasicFilter,
  dateOptions,
  FilterContainer,
} from '../common';
import type { FilterProps } from '../../declarations';

export const DateFilter: React.FC<FilterProps> = ({ colDef }) => (
  <FilterContainer>
    <BasicFilter>
      <DateTimeFloatingPicker
        size="sm"
        onApply={() => undefined}
        onCancel={() => undefined}
      />
    </BasicFilter>
    <AdvancedFilter id={`date-adv-filter-${colDef.id}`}>
      <SelectControl
        menuAppendToBody
        // onChange={(opt: TSelectOption) => setValue(opt.value)}
        options={dateOptions}
        // value={value}
      />
      <DateTimeFloatingPicker
        onApply={() => undefined}
        onCancel={() => undefined}
      />
    </AdvancedFilter>
  </FilterContainer>
);
