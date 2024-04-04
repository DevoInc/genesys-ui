import * as React from 'react';

import { HFlex } from '@devoinc/genesys-ui';

interface BasicFilterProps {
  children: React.ReactNode;
}

export const BasicFilter: React.FC<BasicFilterProps> = ({ children }) => (
  <HFlex.Item flex="1 1 auto">{children}</HFlex.Item>
);
