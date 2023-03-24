import * as React from 'react';
import { useTheme } from 'styled-components';
import { BaseSize } from '../../declarations';
import { OmitUnion } from '../../typeFunctions/omitUnion';

import { StyledToolbar } from './StyledToolbar';
import { ToolbarGroup } from './subcomponents/ToolbarGroup';
import { ToolbarItem } from './subcomponents/ToolbarItem';
import { ToolbarSeparator } from './subcomponents/ToolbarSeparator';

export interface ToolbarProps extends StyledToolbar {
  /** Size of the component */
  size?: OmitUnion<BaseSize, 'lg'>;
  /** Children of the toolbar */
  children?: React.ReactNode;
}

const InternalToolbar: React.FC<ToolbarProps> = ({
  children,
  className,
  size = 'md',
  height,
  elevation = 'stickyBottom',
  ...restBoxProps
}) => {
  const surfaceHeightTokens = useTheme().alias.size.height.surface;
  return (
    <StyledToolbar
      {...restBoxProps}
      className={className}
      elevation={elevation}
      height={height || surfaceHeightTokens[size]}
    >
      {children}
    </StyledToolbar>
  );
};

export const Toolbar = InternalToolbar as typeof InternalToolbar & {
  Group: typeof ToolbarGroup;
  Item: typeof ToolbarItem;
  Separator: typeof ToolbarSeparator;
};

Toolbar.Item = ToolbarItem;
Toolbar.Group = ToolbarGroup;
Toolbar.Separator = ToolbarSeparator;
