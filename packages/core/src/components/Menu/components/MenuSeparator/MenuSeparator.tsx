import * as React from 'react';

import { Divider, DividerProps } from '../../../Divider';
import { StyledMenuSeparator } from './StyledMenuSeparator';

export interface MenuSeparatorProps extends Pick<DividerProps, 'style'> {}

export const MenuSeparator: React.FC<MenuSeparatorProps> = ({ style }) => (
  <StyledMenuSeparator role="separator">
    <Divider colorScheme="weak" margin="cmp-xxs 0" style={style} />
  </StyledMenuSeparator>
);
