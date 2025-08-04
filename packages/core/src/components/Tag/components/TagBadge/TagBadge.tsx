import * as React from 'react';

import { Badge, type BadgeProps } from '../../../Badge';
import { getBasedCssVariablesStyle, isValidColor } from '../../../../helpers';
import { TAG_BADGE_CLASS_NAME_BASE } from '../../constants';

export interface TagBadgeProps extends BadgeProps {}

export const TagBadge: React.FC<TagBadgeProps> = ({
  className,
  colorScheme = 'neutral',
  size = 'md',
  style,
  ...restBadgeProps
}) => {
  const classNameBase = TAG_BADGE_CLASS_NAME_BASE;
  const classNames = [
    `${classNameBase} `,
    `${classNameBase}--${size} `,
    `${classNameBase}--${isValidColor(colorScheme) ? 'custom-color' : colorScheme} `,
    className ? `${className} ` : '',
  ]
    .join('')
    .trim();
  return (
    <Badge
      {...restBadgeProps}
      className={classNames}
      colorScheme={colorScheme}
      size={size}
      style={{
        ...getBasedCssVariablesStyle({
          marginRight: `var(--cmp-tag-badge-space-margin-right-${size})`,
        }),
        ...style,
      }}
    />
  );
};
