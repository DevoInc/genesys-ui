import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import {
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../../declarations';

import { Box } from '../../../Box';
import { panelContainerMixin, PanelContainerMixinProps } from './helpers';

export interface PanelContainerProps
  extends StyledOverloadCssProps,
    StyledPolymorphicProps,
    Omit<PanelContainerMixinProps, 'theme'> {}

export const PanelContainer: React.FC<PanelContainerProps> = ({
  as,
  bordered,
  children,
  display,
  colorScheme,
  elevation = 'raised',
  styles,
  ...boxProps
}) => {
  const theme = useTheme();
  return (
    <Box
      {...boxProps}
      elevation={elevation}
      styles={concat(
        panelContainerMixin({
          bordered,
          colorScheme,
          display,
          elevation,
          theme,
        }),
        styles
      )}
    >
      {children}
    </Box>
  );
};
