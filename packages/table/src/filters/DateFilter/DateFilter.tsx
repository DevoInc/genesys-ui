import * as React from 'react';

import { DateTimePicker } from '@devoinc/genesys-ui-datetime';
import { HFlex, SelectControl } from '@devoinc/genesys-ui';

import { Advanced, dateOptions } from '../common';
import { FilterProps } from '../declarations';

export const DateFilter: React.FC<FilterProps> = () => (
  <HFlex spacing="cmp-xxs" flex="1 1 auto">
    <HFlex.Item flex="1 1 auto">
      <DateTimePicker
        size="sm"
        onApply={() => undefined}
        onCancel={() => undefined}
      />
    </HFlex.Item>
    <HFlex.Item flex="0 0 auto">
      <Advanced>
        <SelectControl
          menuAppendToBody
          // onChange={(opt: SelectOption) => setValue(opt.value)}
          options={dateOptions}
          // value={value}
        />
        <DateTimePicker onApply={() => undefined} onCancel={() => undefined} />
      </Advanced>
    </HFlex.Item>
  </HFlex>
);
