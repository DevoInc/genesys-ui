import * as React from 'react';
import { useTheme } from 'styled-components';

import type { IPanelHeaderAttrs } from '../../declarations';
import {
  IPanelHeaderNavigationMixin,
  panelHeaderNavigationMixin,
} from '../../helpers';
import { mergeStyles } from '../../../../../../helpers';
import { PanelContext } from '../../../../context';
import { Box, type BoxProps } from '../../../../../Box';

export interface PanelHeaderNavigationProps
  extends Pick<BoxProps, 'as' | 'style'>,
    Omit<IPanelHeaderNavigationMixin, 'theme'> {
  children: IPanelHeaderAttrs['navigationContent'];
}

export const PanelHeaderNavigation: React.FC<PanelHeaderNavigationProps> = ({
  as,
  children,
  padding,
  paddingLeft,
  paddingRight,
  removeSpace,
  size,
  style,
}) => {
  const theme = useTheme();
  const context = React.useContext(PanelContext);
  const evalSize = size || context.size || 'md';
  return (
    <Box
      as={as}
      flex="0 0 auto"
      style={mergeStyles(
        panelHeaderNavigationMixin({
          padding,
          paddingLeft,
          paddingRight,
          removeSpace,
          size: evalSize,
          theme,
        }),
        style,
      )}
      zIndex={1}
    >
      {typeof children === 'function' ? children() : children}
    </Box>
  );
};
