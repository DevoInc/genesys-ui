import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import { IPanelBaseAttrs, IPanelContainerAttrs } from '../../declarations';
import { IPanelBodyAttrs } from './declarations';
import { PanelContext } from '../../context';

import { panelBodyMixin } from './helpers';

import { Box } from '../../../Box';
import { Typography } from '../../../Typography';

export interface PanelBodyProps
  extends IPanelBaseAttrs,
    IPanelBodyAttrs,
    Pick<IPanelContainerAttrs, 'size' | 'children'> {}

export const PanelBody = React.forwardRef<HTMLElement, PanelBodyProps>(
  ({ children, removeSpace, hasScroll, size, styles }, ref) => {
    const theme = useTheme();
    const context = React.useContext(PanelContext);
    const evalSize = size || context.size || 'md';

    return (
      <Box
        position="relative"
        flex="1 1 100%"
        overflow="auto"
        ref={ref || context.bodyRef}
        styles={concat(
          panelBodyMixin({
            hasScroll: hasScroll || context.scrolledBodyContent,
            removeSpace,
            size: evalSize,
            theme,
          }),
          styles,
        )}
      >
        {typeof children === 'string' ? (
          <Typography.Paragraph>{children}</Typography.Paragraph>
        ) : (
          children
        )}
      </Box>
    );
  },
);

PanelBody.displayName = 'PanelBody';
