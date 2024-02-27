import * as React from 'react';
import { useTheme } from 'styled-components';

import { STATUS_ICON_MAP } from '../../../constants';

import { BannerStatus } from '../declarations';
import { StyledOverloadCssProps } from '../../../declarations';

import { BannerContext } from '../context';

import { Icon } from '../../Icon';

export interface BannerIconProps extends StyledOverloadCssProps {
  status?: BannerStatus;
}

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
