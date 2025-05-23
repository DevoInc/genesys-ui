import * as React from 'react';

import type { IStyledOverloadCss } from '../../../../declarations/styled';

import { StyledBadgeText } from './StyledBadgeText';

export interface BadgeTextProps extends IStyledOverloadCss {
  children: string | number;
  color?: string;
}

export const BadgeText: React.FC<BadgeTextProps> = ({
  children,
  color,
  style,
}) => (
  <StyledBadgeText color={color} css={style}>
    {children}
  </StyledBadgeText>
);
