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
    Omit<PanelContainerMixinProps, 'theme'> {
  ref: React.MutableRefObject<HTMLElement>;
}

export const PanelContainer = React.forwardRef<
  HTMLElement,
  PanelContainerProps
>(
  (
    {
      bordered,
      children,
      display,
      colorScheme,
      elevation = 'raised',
      styles,
      ...boxProps
    },
    ref,
  ) => {
    const theme = useTheme();
    return (
      <Box
        {...boxProps}
        ref={ref}
        elevation={elevation}
        styles={concat(
          panelContainerMixin({
            bordered,
            colorScheme,
            display,
            elevation,
            theme,
          }),
          styles,
        )}
      >
        {children}
      </Box>
    );
  },
);

PanelContainer.displayName = 'PanelContainer';
