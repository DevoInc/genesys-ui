import * as React from 'react';

import { StyledScreenReadersOnly } from '../../../styled/StyledScreenReaderOnly';

export interface AvatarSROnlyProps {
  children: string;
}

export const AvatarSROnly: React.FC<AvatarSROnlyProps> = ({ children }) => (
  <StyledScreenReadersOnly>{children}</StyledScreenReadersOnly>
);
