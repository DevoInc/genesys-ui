import * as React from 'react';

import { InputControl, HFlex } from '@devoinc/genesys-ui';
import { Advanced, Rule, textDefaultValue, textOptions } from './common';
import { FilterProps } from './declarations';

export const TextFilter: React.FC<FilterProps> = () => (
  <HFlex spacing="cmp-xxs" flex="1 1 auto">
    <HFlex.Item flex="1 1 auto">
      <InputControl
        size="sm"
        aria-label="filter"
        placeholder="Filter content..."
      />
    </HFlex.Item>
    <HFlex.Item flex="0 0 auto">
      <Advanced>
        <Rule
          defaultValue={textDefaultValue}
          options={textOptions}
          label="Filter this column"
          placeholder="Filter by text..."
        />
      </Advanced>
    </HFlex.Item>
  </HFlex>
);
