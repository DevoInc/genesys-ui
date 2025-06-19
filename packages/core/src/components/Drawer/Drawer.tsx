import * as React from 'react';
import { useTheme } from 'styled-components';
import { Dock } from 'react-dock';

import { Box, type BoxProps } from '../Box';

export interface DrawerProps
  extends Omit<
    BoxProps,
    | 'cssTranslate'
    | 'display'
    | 'draggable'
    | 'elevation'
    | 'inset'
    | 'marginBottom'
    | 'marginLeft'
    | 'marginRight'
    | 'marginTop'
    | 'overflow'
    | 'overflowX'
    | 'overflowY'
    | 'padding'
    | 'paddingBottom'
    | 'paddingLeft'
    | 'paddingRight'
    | 'paddingTop'
    | 'position'
    | 'positionBottom'
    | 'positionLeft'
    | 'positionRight'
    | 'positionTop'
    | 'style'
    | 'verticalAlign'
    | 'visibility'
    | 'zIndex'
  > {
  defaultSize?: number;
  dimMode?: 'none' | 'transparent' | 'opaque';
  dimStyle?: React.CSSProperties;
  dockHiddenStyle?: React.CSSProperties;
  dockStyle?: React.CSSProperties;
  hideWhileResizing?: boolean;
  onSizeChange?: (size: number) => void;
  position?: 'left' | 'right' | 'top' | 'bottom';
  size?: number;
  visible?: boolean;
  zIndex?: number;
}

export const Drawer: React.FC<DrawerProps> = ({
  children,
  defaultSize,
  dimMode = 'none',
  dockHiddenStyle,
  dimStyle,
  dockStyle,
  height = '100%',
  hideWhileResizing = false,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  onSizeChange,
  visible = true,
  position = 'right',
  size,
  zIndex,
  width,
  ...restBoxProps
}) => {
  const theme = useTheme();
  return (
    <Box {...restBoxProps}>
      <Dock
        defaultSize={defaultSize}
        dimMode={dimMode}
        dimStyle={dimStyle}
        dockHiddenStyle={dockHiddenStyle}
        dockStyle={{
          background: theme.cmp.drawer.color.background.base,
          height: height,
          maxHeight: maxHeight,
          maxWidth: maxWidth,
          minHeight: minHeight,
          minWidth: minWidth,
          width: width,
          ...dockStyle,
        }}
        isVisible={visible}
        position={position}
        size={size}
        fluid
        onSizeChange={onSizeChange}
        zIndex={zIndex}
      >
        {({ isResizing }) => {
          const contentVisible = !(isResizing && hideWhileResizing);
          return (
            <Box
              visibility={contentVisible ? 'visible' : 'hidden'}
              height={height}
              width={width}
            >
              {children}
            </Box>
          );
        }}
      </Dock>
    </Box>
  );
};
