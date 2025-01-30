import * as React from 'react';
import { useTheme } from 'styled-components';

import type { IPanelHeaderAttrs } from '../../declarations';
import type { IPanelSpaceAttrs } from '../../../../declarations';
import { panelHeaderContainerMixin } from '../../helpers';
import { mergeStyles } from '../../../../../../helpers';
import { PanelContext } from '../../../../context';
import { Box, type BoxProps } from '../../../../../Box';

export interface PanelHeaderContainerProps
  extends Pick<BoxProps, 'as' | 'style'>,
    IPanelSpaceAttrs,
    Omit<IPanelHeaderAttrs, 'actions' | 'hasSubtitle'> {}

export const PanelHeaderContainer: React.FC<PanelHeaderContainerProps> = ({
  as = 'header',
  bordered,
  children,
  hasBoxShadow,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  removeSpace,
  size = 'md',
  style,
}) => {
  const theme = useTheme();
  const context = React.useContext(PanelContext);
  const evalHasBoxShadow = hasBoxShadow ?? context.scrolledBodyContent;
  return (
    <Box
      as={as}
      flex="0 0 auto"
      style={mergeStyles(
        panelHeaderContainerMixin({
          bordered,
          hasBoxShadow: evalHasBoxShadow,
          padding,
          paddingBottom,
          paddingLeft,
          paddingRight,
          paddingTop,
          removeSpace,
          size,
          theme,
        }),
        style,
      )}
      zIndex={1}
    >
      {children}
    </Box>
  );
};
