import * as React from 'react';

import { StyledOverlay, StyledOverlayProps } from './StyledOverlay';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface OverlayProps extends StyledOverlayProps {}

export const Overlay: React.FC<OverlayProps> = ({
  alignItems = 'center',
  bgColor,
  bgColorScheme = 'light',
  bgGradient,
  children,
  fixed = false,
  flexDirection = 'column',
  flexWrap,
  hasInteractionBehind = false,
  justifyContent = 'center',
  opacity,
  padding = 'cmp-md cmp-lg',
  zIndex = 0,
  ...restNativeProps
}) => (
  <StyledOverlay
    {...restNativeProps}
    alignItems={alignItems}
    bgColor={bgColor}
    bgColorScheme={bgColorScheme}
    bgGradient={bgGradient}
    fixed={fixed}
    flexDirection={flexDirection}
    flexWrap={flexWrap}
    hasInteractionBehind={hasInteractionBehind}
    justifyContent={justifyContent}
    opacity={opacity > 1 ? 1 : opacity}
    padding={padding}
    zIndex={zIndex}
  >
    {children}
  </StyledOverlay>
);
