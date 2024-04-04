import * as React from 'react';

import { DateTimeFloatingPicker } from '@devoinc/genesys-ui-datetime';
import { SelectControl } from '@devoinc/genesys-ui';

import {
  AdvancedFilter,
  BasicFilter,
  DATE_OPTIONS,
  FilterContainer,
} from '../common';
import type { TFilter } from '../../declarations';

export const DateFilter: React.FC<TFilter> = ({ colDef }) => (
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
        options={DATE_OPTIONS}
        // value={value}
      />
      <DateTimeFloatingPicker
        onApply={() => undefined}
        onCancel={() => undefined}
      />
    </AdvancedFilter>
  </FilterContainer>
);
