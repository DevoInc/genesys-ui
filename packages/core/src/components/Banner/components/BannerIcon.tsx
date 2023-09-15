import * as React from 'react';
import { useTheme } from 'styled-components';

import { BannerProps, Icon } from '../../index';
import { STATUS_ICON_MAP } from '../../../constants';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BannerIconProps
  extends Pick<BannerProps, 'status' | 'styles'> {}

export const BannerIcon: React.FC<BannerIconProps> = ({
  status = 'info',
  styles,
}) => {
  const theme = useTheme();
  return (
    <Icon
      iconId={STATUS_ICON_MAP.filled[status] || ''}
      color={theme.cmp.boxMessage.icon.color.text[status]}
      size="xs"
      styles={styles}
    />
  );
};
