import * as React from 'react';

import { HFlex } from '@devoinc/genesys-ui';

import { Advanced } from '../common';
import { FilterProps } from '../declarations';

export const BooleanFilter: React.FC<FilterProps> = () => (
  <HFlex spacing="cmp-xxs" flex="1 1 auto">
    <HFlex.Item flex="1 1 auto">BooleanFilter</HFlex.Item>
    <HFlex.Item flex="0 0 auto">
      <Advanced>Boolean Advanced Filter</Advanced>
    </HFlex.Item>
  </HFlex>
);
