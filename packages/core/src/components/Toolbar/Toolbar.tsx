import * as React from 'react';
import { useTheme } from 'styled-components';

import { OmitUnion } from '../../typeFunctions';
import type { TBaseSize } from '../../declarations';
import { toolbarContainerMixin } from './helpers';
import { ToolbarDivider, ToolbarGroup, ToolBarItem } from './components';
import { Flex, type FlexProps } from '../Flex';
import { mergeStyles } from '../../helpers';

export interface ToolbarProps extends FlexProps {
  /** Size of the component */
  size?: OmitUnion<TBaseSize, 'lg'>;
}

const InternalToolbar: React.FC<ToolbarProps> = ({
  alignItems = 'center',
  children,
  size = 'md',
  gap = 'layout-xs',
  height,
  justifyContent = 'space-between',
  elevation = 'stickyBottom',
  padding = '0 cmp-sm',
  role = 'group',
  style,
  ...restFlexProps
}) => {
  const theme = useTheme();
  const surfaceHeightTokens = theme.alias.size.height.surface;
  return (
    <Flex
      {...restFlexProps}
      alignItems={alignItems}
      elevation={elevation}
      gap={gap}
      justifyContent={justifyContent}
      height={height || surfaceHeightTokens[size]}
      padding={padding}
      role={role}
      style={mergeStyles(toolbarContainerMixin({ theme }), style)}
    >
      {children}
    </Flex>
  );
};

export const Toolbar = InternalToolbar as typeof InternalToolbar & {
  Group: typeof ToolbarGroup;
  Item: typeof ToolBarItem;
  Divider: typeof ToolbarDivider;
};

Toolbar.Group = ToolbarGroup;
Toolbar.Item = ToolBarItem;
Toolbar.Divider = ToolbarDivider;

InternalToolbar.displayName = 'Toolbar';
Toolbar.Group.displayName = 'Toolbar.Group';
Toolbar.Item.displayName = 'Toolbar.item';
Toolbar.Divider.displayName = 'Toolbar.Divider';
