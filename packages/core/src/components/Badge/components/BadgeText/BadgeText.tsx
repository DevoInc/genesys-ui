import * as React from 'react';

import type { IClassName, IStyleAttr } from '../../../../declarations';
import { BADGE_TEXT_CLASS_NAME_BASE } from '../../constants';

export interface BadgeTextProps extends IStyleAttr, IClassName {
  children: string | number;
}

export const BadgeText: React.FC<BadgeTextProps> = ({
  children,
  className,
  style,
}) => {
  const classNames = [
    `${BADGE_TEXT_CLASS_NAME_BASE} `,
    className && `${className}`,
  ]
    .join('')
    .trim();
  return (
    <span className={classNames} style={style}>
      {children}
    </span>
  );
};
