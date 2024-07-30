import * as React from 'react';
import { useTheme } from 'styled-components';

import { ChipContext } from '../../context';
import { Icon, type IconProps } from '../../../Icon';
import { mergeStyles } from '../../../../helpers';

export interface ChipIconProps extends IconProps {}

export const ChipIcon: React.FC<ChipIconProps> = ({
  size = 'md',
  style,
  ...restIconProps
}) => {
  const tokens = useTheme().cmp.chip.icon;
  const context = React.useContext(ChipContext);
  return (
    <Icon
      {...context}
      {...restIconProps}
      style={mergeStyles(
        {
          position: 'relative',
          fontSize: tokens.typo.fontSize[size],
          marginLeft: tokens.space.offset[size],
          marginRight: tokens.space.margin[size],
        },
        style,
      )}
    />
  );
};
