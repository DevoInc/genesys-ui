import * as React from 'react';
import { useTheme } from 'styled-components';
import { Dock } from 'react-dock';

import { Box, BoxProps } from '../Box';
import { FloatPanelClose } from './components';

export interface FloatPanelProps
  extends Omit<BoxProps, 'position' | 'visibility'> {
  defaultSize?: number;
  dimMode?: 'none' | 'transparent' | 'opaque';
  hideWhileResizing?: boolean;
  visible?: boolean;
  position?: 'left' | 'right' | 'top' | 'bottom';
  size?: number;
}

export const InternalFloatPanel: React.FC<FloatPanelProps> = ({
  as,
  children,
  defaultSize,
  dimMode = 'none',
  height = '100%',
  hideWhileResizing = false,
  visible = true,
  position = 'right',
  size,
  styles,
  ...restBoxProps
}) => {
  const theme = useTheme();
  return (
    <Box as={as}>
      <Dock
        defaultSize={defaultSize}
        dimMode={dimMode}
        dockStyle={{
          background: theme.alias.color.background.surface.base.base,
        }}
        isVisible={visible}
        position={position}
        size={size}
        fluid
      >
        {({ isResizing }) => {
          const contentVisible = !(isResizing && hideWhileResizing);
          return (
            <Box
              {...restBoxProps}
              height={height}
              visibility={contentVisible ? 'visible' : 'hidden'}
            >
              {children}
            </Box>
          );
        }}
      </Dock>
    </Box>
  );
};

export const FloatPanel = InternalFloatPanel as typeof InternalFloatPanel & {
  Close: typeof FloatPanelClose;
};

FloatPanel.Close = FloatPanelClose;

InternalFloatPanel.displayName = 'FloatPanel';
