import * as React from 'react';

import { Badge, type BadgeProps } from '../../../Badge';

export interface TagBadgeProps extends BadgeProps {}

export const TagBadge: React.FC<TagBadgeProps> = ({
  colorScheme = 'neutral',
  size = 'md',
  style,
  ...restBadgeProps
}) => {
  return (
    <Badge
      {...restBadgeProps}
      colorScheme={colorScheme}
      size={size}
      style={{
        marginRight: `var(--cmp-tag-badge-space-margin-right-${size})`,
        ...style,
      }}
    />
  );
};
