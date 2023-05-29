import * as React from 'react';
import { concat } from 'lodash';

import { Box, Typography } from '../../..';

import { StyledOverloadCssProps } from '../../../../declarations';
import { panelBodyMixin, PanelBodyMixinProps } from './helpers';
import { useTheme } from 'styled-components';

export interface PanelBodyProps
  extends Omit<PanelBodyMixinProps, 'theme'>,
    StyledOverloadCssProps {
  children?: React.ReactNode;
  panelBodyRef?: (node: HTMLDivElement) => void;
}

export const PanelBody: React.FC<PanelBodyProps> = ({
  children,
  removeSpace,
  hasScroll,
  panelBodyRef,
  size = 'md',
  styles,
}) => {
  const theme = useTheme();
  const baseStyles = panelBodyMixin({ hasScroll, removeSpace, size, theme });
  return (
    <Box
      position="relative"
      flex="1 1 100%"
      overflow="auto"
      ref={panelBodyRef}
      styles={concat(baseStyles, styles)}
    >
      {typeof children === 'string' ? (
        <Typography.Paragraph size={size}>{children}</Typography.Paragraph>
      ) : (
        children
      )}
    </Box>
  );
};
