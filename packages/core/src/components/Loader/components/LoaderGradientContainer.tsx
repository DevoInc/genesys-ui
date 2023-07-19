import * as React from 'react';

import { Box, BoxProps } from '../..';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LoaderGradientContainerProps
  extends Omit<BoxProps, 'width' | 'position'> {}

export const LoaderGradientContainer: React.FC<
  LoaderGradientContainerProps
> = ({ children, height = '16rem', ...restBoxProps }) => (
  <Box {...restBoxProps} height={height} width="100%" position="relative">
    {children}
  </Box>
);
