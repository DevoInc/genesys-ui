import * as React from 'react';
import { concat } from 'lodash';
import { css, useTheme } from 'styled-components';

import { IconButtonClose, IconButtonCloseProps } from '../..';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FloatPanelCloseProps extends IconButtonCloseProps {}

export const FloatPanelClose: React.FC<FloatPanelCloseProps> = ({
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
        styles
      )}
    />
  );
};
