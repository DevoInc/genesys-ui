import * as React from 'react';
import { Dock } from 'react-dock';

// declarations
import {
  GlobalAriaProps,
  GlobalAttrProps,
  LayoutAriaProps,
  LayoutAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../declarations';

// components
import { Box } from '../..';
import { useTheme } from 'styled-components';

export interface FloatPanelContainerProps
  extends Pick<GlobalAttrProps, 'id' | 'role'>,
    GlobalAriaProps,
    StyledPolymorphicProps,
    StyledOverloadCssProps,
    Pick<LayoutAttrProps, 'accessKey' | 'tabIndex'>,
    LayoutAriaProps,
    Pick<LayoutAriaProps, 'aria-expanded'> {
  children?: React.ReactNode;
  defaultSize?: number;
  dimMode?: 'none' | 'transparent' | 'opaque';
  hideWhileResizing?: boolean;
  visible?: boolean;
  position?: 'left' | 'right' | 'top' | 'bottom';
  size?: number;
}

export const FloatPanelContainer: React.FC<FloatPanelContainerProps> = ({
  children,
  defaultSize,
  dimMode,
  hideWhileResizing,
  visible,
  position,
  size,
  ...nativeProps
}) => {
  const theme = useTheme();
  return (
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
            {...nativeProps}
            visibility={contentVisible ? 'visible' : 'hidden'}
          >
            {children}
          </Box>
        );
      }}
    </Dock>
  );
};
