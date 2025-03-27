import * as React from 'react';
import { useTheme } from 'styled-components';

import { CHIP_ICON_OFFSET_SIZE_MAP } from '../../constants';
import { ChipContext } from '../../context';
import { Icon, type IconProps } from '../../../Icon';

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
      size={size}
      style={{
        position: 'relative',
        marginLeft: tokens.space.offset[CHIP_ICON_OFFSET_SIZE_MAP[size]],
        marginRight: tokens.space.margin[CHIP_ICON_OFFSET_SIZE_MAP[size]],
        ...style,
      }}
    />
  );
};
