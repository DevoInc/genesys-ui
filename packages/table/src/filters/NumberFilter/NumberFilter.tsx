import * as React from 'react';

import { InputControl } from '@devoinc/genesys-ui';
import {
  AdvancedFilter,
  BasicFilter,
  FilterContainer,
  FilterRule,
  numberDefaultValue,
  numberOptions,
} from '../common';
import { FilterProps } from '../declarations';

export const NumberFilter: React.FC<FilterProps> = ({ colDef }) => (
  <FilterContainer>
    <BasicFilter>
      <InputControl
        size="sm"
        aria-label="filter"
        placeholder="Filter content..."
        type="number"
      />
    </BasicFilter>
    <AdvancedFilter id={`number-adv-filter-${colDef.id}`}>
      <FilterRule
        defaultValue={numberDefaultValue}
        options={numberOptions}
        label="Filter this column"
        placeholder="Filter by number..."
        type="number"
      />
    </AdvancedFilter>
  </FilterContainer>
);
