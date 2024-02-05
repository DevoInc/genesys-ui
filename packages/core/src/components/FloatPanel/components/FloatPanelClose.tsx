import * as React from 'react';
import { concat } from 'lodash';
import { css, useTheme } from 'styled-components';

import { IconButtonClose, IconButtonCloseProps } from '../../IconButton';

export const FloatPanelClose: React.FC<IconButtonCloseProps> = ({
  styles,
  ...restIconButtonCloseProps
}) => {
  const theme = useTheme();
  return (
    <IconButtonClose
      {...restIconButtonCloseProps}
      styles={concat(
        css`
          position: absolute;
          top: ${theme.alias.space.cmp.sm};
          right: ${theme.alias.space.cmp.sm};
        `,
        styles,
      )}
    />
  );
};
