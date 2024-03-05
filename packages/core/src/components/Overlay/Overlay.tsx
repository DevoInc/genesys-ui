import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import type {
  ContainerEventAttrProps,
  MouseEventAttrProps,
} from '../../declarations';
import type { IOverlay } from './declarations';

import { overlayMixin } from './helpers';

import { Flex, type FlexProps } from '../Flex';

export interface OverlayProps
  extends Omit<FlexProps, 'opacity'>,
    IOverlay,
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
  styles,
  tooltip,
  zIndex = 0,
  ...restFlexProps
}) => {
  const theme = useTheme();
  return (
    <Flex
      {...restFlexProps}
      alignItems={alignItems}
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      justifyContent={justifyContent}
      padding={padding}
      styles={concat(
        overlayMixin({
          bgColor,
          bgColorScheme,
          bgGradient,
          fixed,
          hasInteractionBehind,
          opacity: opacity > 1 ? 1 : opacity,
          theme,
        }),
        styles,
      )}
      tooltip={tooltip}
      zIndex={zIndex}
    >
      {children}
    </Flex>
  );
};
