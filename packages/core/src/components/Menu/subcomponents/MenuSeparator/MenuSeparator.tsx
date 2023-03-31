import * as React from 'react';

import { Divider } from '../../../Divider';
import { StyledMenuSeparator } from './StyledMenuSeparator';

export const MenuSeparator = () => (
  <StyledMenuSeparator role="presentation">
    <Divider colorScheme="weak" margin="cmp-xs" />
  </StyledMenuSeparator>
);
