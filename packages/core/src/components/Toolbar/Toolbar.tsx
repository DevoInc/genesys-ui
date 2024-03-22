import * as React from 'react';
import { concat } from 'lodash';
import { useTheme } from 'styled-components';
import { OmitUnion } from '../../typeFunctions';

import type { TBaseSize } from '../../declarations';

import { toolbarContainerMixin } from './helpers';

import { ToolbarGroup } from './components/ToolbarGroup';
import { ToolbarDivider } from './components/ToolbarDivider';
import { Flex, type FlexProps } from '../Flex';

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
  styles,
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
      styles={concat(toolbarContainerMixin({ theme }), styles)}
    >
      {children}
    </Flex>
  );
};

export const Toolbar = InternalToolbar as typeof InternalToolbar & {
  Group: typeof ToolbarGroup;
  Item: typeof Flex;
  Divider: typeof ToolbarDivider;
};

Toolbar.Group = ToolbarGroup;
Toolbar.Item = Flex;
Toolbar.Divider = ToolbarDivider;

InternalToolbar.displayName = 'Toolbar';
Toolbar.Group.displayName = 'Toolbar.Group';
Toolbar.Item.displayName = 'Toolbar.item';
Toolbar.Divider.displayName = 'Toolbar.Divider';
