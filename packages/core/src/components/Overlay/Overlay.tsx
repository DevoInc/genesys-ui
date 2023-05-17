import * as React from 'react';

import { StyledOverlay, StyledOverlayProps } from './StyledOverlay';
import {
  ContainerEventAttrProps,
  MouseEventAttrProps,
} from '../../declarations';

export interface OverlayProps
  extends StyledOverlayProps,
    //native props
    MouseEventAttrProps,
    Pick<ContainerEventAttrProps, 'onKeyUp' | 'onKeyDown'> {}

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
  tooltip,
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
    title={tooltip}
    zIndex={zIndex}
  >
    {children}
  </StyledOverlay>
);
