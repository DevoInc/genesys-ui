import * as React from 'react';
import { useTheme } from 'styled-components';

import { Icon, IconProps } from '../../Icon';
import { concat } from 'lodash';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TagIconProps extends IconProps {}

export const TagIcon: React.FC<TagIconProps> = ({
  colorScheme = 'neutral',
  size = 'md',
  styles,
  ...restIconProps
}) => {
  const theme = useTheme();
  const cmpTokens = theme.cmp.tag.icon;
  const square = cmpTokens.size.square[size];
  const marginRight = cmpTokens.space.marginRight[size];
  return (
    <Icon
      {...restIconProps}
      colorScheme={colorScheme}
      size={square}
      styles={concat(`margin-right: ${marginRight}`, styles)}
    />
  );
};
