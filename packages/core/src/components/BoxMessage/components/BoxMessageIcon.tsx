import * as React from 'react';
import { useTheme } from 'styled-components';

import { BoxMessageProps, Icon } from '../../index';
import { STATUS_ICON_MAP } from '../../../../src/constants';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BoxMessageIconProps
  extends Pick<BoxMessageProps, 'status' | 'styles'> {}

export const BoxMessageIcon: React.FC<BoxMessageIconProps> = ({
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
