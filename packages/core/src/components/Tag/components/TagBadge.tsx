import * as React from 'react';
import { useTheme } from 'styled-components';

import { Badge, BadgeProps } from '../../Badge';
import { concat } from 'lodash';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TagBadgeProps extends BadgeProps {}

export const TagBadge: React.FC<TagBadgeProps> = ({
  colorScheme = 'neutral',
  size = 'md',
  styles,
  ...restBadgeProps
}) => {
  const marginRight = useTheme().cmp.tag.badge.space.marginRight[size];
  return (
    <Badge
      {...restBadgeProps}
      colorScheme={colorScheme}
      size={size}
      styles={concat(`margin-right: ${marginRight}`, styles)}
    />
  );
};
