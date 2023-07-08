import * as React from 'react';
import { useTheme } from 'styled-components';

import { statusIconMap } from '../../../styled/functions';
import { BoxMessageProps, Icon } from '../../index';

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
      iconId={statusIconMap.filled[status] || ''}
      color={theme.cmp.boxMessage.icon.color.text[status]}
      size="xs"
      styles={styles}
    />
  );
};
