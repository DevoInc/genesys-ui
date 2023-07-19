import * as React from 'react';
import { useTheme } from 'styled-components';

import { Overlay, OverlayProps } from '../..';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LoaderGradientOverlayProps
  extends Omit<
    OverlayProps,
    'alignItems' | 'bgGradient' | 'justifyContent' | 'hasInteractionBehind'
  > {}

export const LoaderGradientOverlay: React.FC<LoaderGradientOverlayProps> = ({
  children,
  ...restOverlayProps
}) => {
  const theme = useTheme();
  const gradientColor = theme.alias.color.background.surface.base.base;
  return (
    <Overlay
      {...restOverlayProps}
      alignItems="center"
      bgGradient={`linear-gradient(to top, ${gradientColor} 0%, ${gradientColor} 3.2rem,rgba(0,0,0,0) 100%)`}
      hasInteractionBehind
      justifyContent="flex-end"
    >
      {children}
    </Overlay>
  );
};
