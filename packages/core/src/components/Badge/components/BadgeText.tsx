import * as React from 'react';

import { IStyledOverloadCss } from '../../../declarations/styled';

import { StyledBadgeText } from '../StyledBadge';

export interface BadgeTextProps extends IStyledOverloadCss {
  children: string;
  color?: string;
}

export const BadgeText: React.FC<BadgeTextProps> = ({
  children,
  color,
  styles,
}) => (
  <StyledBadgeText color={color} css={styles}>
    {children}
  </StyledBadgeText>
);
