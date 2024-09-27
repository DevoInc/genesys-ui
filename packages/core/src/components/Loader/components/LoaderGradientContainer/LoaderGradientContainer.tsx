import * as React from 'react';
import { useTheme } from 'styled-components';

import {
  POSITION_GRADIENT_DIR_MAP,
  POSITION_GRADIENT_FLEX_DIR_MAP,
  POSITION_GRADIENT_FLEX_JUSTIFY_MAP,
} from '../../constants';
import type { TCmpSpacing } from '../../../../declarations';
import type { TLoaderGradientPosition } from '../../declarations';
import { Box } from '../../../Box';
import { Overlay, type OverlayProps } from '../../../Overlay';

export interface LoaderGradientContainerProps
  extends Omit<
    OverlayProps,
    'alignItems' | 'justifyContent' | 'hasInteractionBehind' | 'position'
  > {
  position?: TLoaderGradientPosition;
  spinnerOffset?: TCmpSpacing;
}

export const LoaderGradientContainer: React.FC<
  LoaderGradientContainerProps
> = ({
  bgGradient,
  children,
  height,
  padding,
  position = 'bottom',
  spinnerOffset = 'cmp-xs',
  width,
  ...restOverlayProps
}) => {
  const theme = useTheme();
  const gradientColor = theme.alias.color.background.surface.base.base;
  const evalDefaultHeight = ['top', 'bottom'].includes(position)
    ? '16rem'
    : '100%';
  const evalDefaultWidth = ['top', 'bottom'].includes(position)
    ? '100%'
    : '16rem';
  const positionProps = {
    positionTop: position === 'top' ? 0 : null,
    positionRight: position === 'right' ? 0 : null,
    positionBottom: position === 'bottom' ? 0 : null,
    positionLeft: position === 'left' ? 0 : null,
  };

  return (
    <Box
      {...positionProps}
      height={height || evalDefaultHeight}
      width={width || evalDefaultWidth}
      position="absolute"
    >
      <Overlay
        {...restOverlayProps}
        flexDirection={POSITION_GRADIENT_FLEX_DIR_MAP[position]}
        alignItems="center"
        bgGradient={
          bgGradient ||
          `linear-gradient(to ${POSITION_GRADIENT_DIR_MAP[position]}, ${gradientColor} 0%, ${gradientColor} 3.2rem,rgba(0,0,0,0) 100%)`
        }
        hasInteractionBehind
        justifyContent={POSITION_GRADIENT_FLEX_JUSTIFY_MAP[position]}
        padding={padding || `0 0 ${spinnerOffset} 0`}
      >
        {children}
      </Overlay>
    </Box>
  );
};
