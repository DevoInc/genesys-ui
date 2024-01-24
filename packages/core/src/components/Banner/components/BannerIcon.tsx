import * as React from 'react';
import { useTheme } from 'styled-components';

import { STATUS_ICON_MAP } from '../../../constants';

import { BannerContext } from '../context';

import { Icon } from '../../Icon';
import { BannerProps } from '../Banner';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BannerIconProps
  extends Pick<BannerProps, 'status' | 'styles'> {}

export const BannerIcon: React.FC<BannerIconProps> = ({ status, styles }) => {
  const theme = useTheme();
  const { status: contextStatus } = React.useContext(BannerContext);
  const statusEval = status || contextStatus;

  return (
    <Icon
      iconId={STATUS_ICON_MAP.filled[statusEval] || ''}
      color={theme.cmp.boxMessage.icon.color.text[statusEval]}
      size="xs"
      styles={styles}
    />
  );
};
