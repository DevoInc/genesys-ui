import * as React from 'react';

import { Divider } from '../../../Divider';
import { StyledMenuSeparator } from './StyledMenuSeparator';

export const MenuSeparator: React.FC = () => (
  <StyledMenuSeparator role="separator">
    <Divider colorScheme="weak" margin="cmp-xs 0" />
  </StyledMenuSeparator>
);
