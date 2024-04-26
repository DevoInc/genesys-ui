import * as React from 'react';
import { useTheme } from 'styled-components';

import { STATUS_ICON_MAP } from '../../../constants';

import type { TBannerStatus } from '../declarations';

import { BannerContext } from '../context';

import { Icon, type IconProps } from '../../Icon';

export interface BannerIconProps
  extends Omit<IconProps, 'color' | 'colorScheme' | 'size'> {
  status?: TBannerStatus;
}

export const BannerIcon: React.FC<BannerIconProps> = ({
  status,
  style,
  ...restIconProps
}) => {
  const theme = useTheme();
  const context = React.useContext(BannerContext);
  const statusEval = status || context.status;

  return (
    <Icon
      {...restIconProps}
      color={theme.cmp.boxMessage.icon.color.text[statusEval]}
      size="xs"
      style={style}
    >
      {STATUS_ICON_MAP.filled[statusEval || 'info']}
    </Icon>
  );
};
