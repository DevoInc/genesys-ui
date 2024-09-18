import * as React from 'react';
import { useTheme } from 'styled-components';

import { Icon, type IconProps } from '../../../Icon';

export interface TagIconProps extends IconProps {}

export const TagIcon: React.FC<TagIconProps> = ({
  children,
  colorScheme = 'neutral',
  size = 'md',
  style,
  ...restIconProps
}) => {
  const cmpTokens = useTheme().cmp.tag.icon;
  const square = cmpTokens.size.square[size];
  const marginRight = cmpTokens.space.marginRight[size];
  return (
    <Icon
      {...restIconProps}
      colorScheme={colorScheme}
      size={square}
      style={{
        marginRight: marginRight,
        ...style,
      }}
    >
      {children}
    </Icon>
  );
};
