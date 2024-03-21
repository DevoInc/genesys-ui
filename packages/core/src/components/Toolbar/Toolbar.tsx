import * as React from 'react';
import { concat } from 'lodash';
import { useTheme } from 'styled-components';
import { OmitUnion } from '../../typeFunctions';

import { toolbarContainerMixin } from './helpers';

import { TBaseSize } from '../../declarations';

import { ToolbarGroup } from './components/ToolbarGroup';
import { ToolbarSeparator } from './components/ToolbarSeparator';
import { ToolbarItem } from './components/ToolbarItem';
import { Flex, FlexProps } from '../Flex';

export interface ToolbarProps
  extends Omit<FlexProps, 'as' | 'alignItems' | 'justifyContent'> {
  /** Size of the component */
  size?: OmitUnion<TBaseSize, 'lg'>;
}

const InternalToolbar: React.FC<ToolbarProps> = ({
  children,
  size = 'md',
  height,
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
      alignItems="center"
      elevation={elevation}
      gap="layout-xs"
      justifyContent="space-between"
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
  Item: typeof ToolbarItem;
  Separator: typeof ToolbarSeparator;
};

Toolbar.Group = ToolbarGroup;
Toolbar.Item = ToolbarItem;
Toolbar.Separator = ToolbarSeparator;
