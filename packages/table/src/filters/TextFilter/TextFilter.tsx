import * as React from 'react';

import { InputControl, HFlex, Button } from '@devoinc/genesys-ui';

import {
  AdvancedFilter,
  BasicFilter,
  FilterContainer,
  FilterRule,
  textDefaultValue,
  textOptions,
} from '../common';
import { FilterProps } from '../declarations';

export const TextFilter: React.FC<FilterProps> = ({ colDef }) => (
  <FilterContainer>
    <BasicFilter>
      <InputControl
        size="sm"
        aria-label="filter"
        placeholder="Filter content..."
      />
    </BasicFilter>
    <AdvancedFilter
      id={`text-adv-filter-${colDef.id}`}
      footer={
        <HFlex flex="1">
          <HFlex.Item marginLeft="auto">
            <Button colorScheme="accent">Reset</Button>
          </HFlex.Item>
        </HFlex>
      }
    >
      <FilterRule
        defaultValue={textDefaultValue}
        options={textOptions}
        label="Filter this column"
        placeholder="Filter by text..."
      />
    </AdvancedFilter>
  </FilterContainer>
);
