import * as React from 'react';

import { Divider } from '../../../Divider';
import { StyledMenuSeparator } from './StyledMenuSeparator';

export const MenuSeparator: React.FC = () => (
  <StyledMenuSeparator role="presentation">
    <Divider colorScheme="weak" margin="cmp-xs" />
  </StyledMenuSeparator>
);
