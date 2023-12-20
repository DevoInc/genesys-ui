import * as React from 'react';

import { InputControl, HFlex } from '@devoinc/genesys-ui';
import { Advanced, Rule, numberDefaultValue, numberOptions } from '../common';
import { FilterProps } from '../declarations';

export const NumberFilter: React.FC<FilterProps> = () => (
  <HFlex spacing="cmp-xxs" flex="1 1 auto">
    <HFlex.Item flex="1 1 auto">
      <InputControl
        size="sm"
        aria-label="filter"
        placeholder="Filter content..."
        type="number"
      />
    </HFlex.Item>
    <HFlex.Item flex="0 0 auto">
      <Advanced>
        <Rule
          defaultValue={numberDefaultValue}
          options={numberOptions}
          label="Filter this column"
          placeholder="Filter by number..."
          type="number"
        />
      </Advanced>
    </HFlex.Item>
  </HFlex>
);
