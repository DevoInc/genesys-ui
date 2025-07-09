import * as React from 'react';

import type { IStyleAttr } from '../../../../declarations';
import { BADGE_CLASS_NAME_BASE } from '../../constants';

export interface BadgeTextProps extends IStyleAttr {
  children: string | number;
}

export const BadgeText: React.FC<BadgeTextProps> = ({ children, style }) => (
  <span className={`${BADGE_CLASS_NAME_BASE}__text`} style={style}>
    {children}
  </span>
);
