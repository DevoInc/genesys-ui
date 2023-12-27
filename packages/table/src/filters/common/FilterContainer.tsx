import * as React from 'react';

import { HFlex } from '@devoinc/genesys-ui';

type FilterContainerProps = {
  children: React.ReactNode;
};

export const FilterContainer: React.FC<FilterContainerProps> = ({
  children,
}) => (
  <HFlex spacing="cmp-xxs" flex="1 1 auto">
    {children}
  </HFlex>
);
