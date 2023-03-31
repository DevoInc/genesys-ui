import * as React from 'react';

import { Typography } from '../../../Typography';
import { StyledMenuHeading } from './StyledMenuHeading';

export interface MenuHeadingProps {
  /** It's used to render the content included between its opening and closing tags. */
  children?: React.ReactNode;
}

export const MenuHeading: React.FC<MenuHeadingProps> = ({ children }) => (
  <StyledMenuHeading role="presentation">
    <Typography.Heading size="overline-md">{children}</Typography.Heading>
  </StyledMenuHeading>
);
