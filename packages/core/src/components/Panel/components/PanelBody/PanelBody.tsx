import * as React from 'react';
import { useTheme } from 'styled-components';

import type {
  IPanelBaseAttrs,
  IPanelContainerAttrs,
  IPanelSpaceAttrs,
} from '../../declarations';
import type { IPanelBodyAttrs } from './declarations';
import { PanelContext } from '../../context';
import { panelBodyMixin } from './helpers';
import { Box } from '../../../Box';
import { Typography } from '../../../Typography';
import { mergeStyles } from '../../../../helpers';
import type { Resolve } from '../../../../typeFunctions';

export interface PanelBodyProps
  extends IPanelBaseAttrs,
    IPanelSpaceAttrs,
    IPanelBodyAttrs,
    Pick<IPanelContainerAttrs, 'size' | 'children'> {}

export const PanelBody = React.forwardRef<
  HTMLDivElement,
  Resolve<PanelBodyProps>
>(
  (
    {
      children,
      removeSpace,
      hasScrollSpacing,
      padding,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      size,
      style,
    },
    ref,
  ) => {
    const theme = useTheme();
    const context = React.useContext(PanelContext);
    const evalSize = size || context.size || 'md';
    const removeContentSpace =
      removeSpace ?? context?.removeContentSpace ?? false;

    return (
      <Box
        position="relative"
        flex="1 1 100%"
        overflow="auto"
        ref={ref || context.bodyRef}
        style={mergeStyles(
          panelBodyMixin({
            hasScrollSpacing: hasScrollSpacing ?? context.scrolledBodyContent,
            padding,
            paddingBottom,
            paddingLeft,
            paddingRight,
            paddingTop,
            removeSpace: removeContentSpace,
            size: evalSize,
            theme,
          }),
          style,
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
