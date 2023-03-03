import * as React from 'react';

import { StyledToolbarItem, StyledToolbarItemProps } from './StyledToolbarItem';

export interface ToolbarItemProps extends StyledToolbarItemProps {
  height?: React.CSSProperties['height'];
  onMouseDown?: React.MouseEventHandler<HTMLLIElement>;
  children?: React.ReactNode;
}

export const ToolbarItem: React.FC<ToolbarItemProps> = ({
  height,
  asSeparator = false,
  children,
  onMouseDown,
}) => {
  return (
    <StyledToolbarItem
      $height={height}
      onMouseDown={onMouseDown}
      asSeparator={asSeparator}
    >
      {!asSeparator && children}
    </StyledToolbarItem>
  );
};
