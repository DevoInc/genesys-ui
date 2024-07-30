import * as React from 'react';
import { useTheme } from 'styled-components';

import { Badge, type BadgeProps } from '../../../Badge';
import { mergeStyles } from '../../../../helpers';

export interface TagBadgeProps extends BadgeProps {}

export const TagBadge: React.FC<TagBadgeProps> = ({
  colorScheme = 'neutral',
  size = 'md',
  style,
  ...restBadgeProps
}) => {
  const marginRight = useTheme().cmp.tag.badge.space.marginRight[size];
  return (
    <Badge
      {...restBadgeProps}
      colorScheme={colorScheme}
      size={size}
      style={mergeStyles(`margin-right: ${marginRight}`, style)}
    />
  );
};
