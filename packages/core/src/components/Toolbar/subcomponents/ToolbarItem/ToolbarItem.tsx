import * as React from 'react';

import { StyledToolbarItem, StyledToolbarItemProps } from './StyledToolbarItem';
import {
  GlobalAriaProps,
  GlobalAttrProps,
  MouseEventAttrProps,
} from '../../../../declarations';

export interface ToolbarItemProps
  extends GlobalAttrProps,
    GlobalAriaProps,
    MouseEventAttrProps,
    StyledToolbarItemProps {
  height?: React.CSSProperties['height'];
  onMouseDown?: React.MouseEventHandler<HTMLLIElement>;
  children?: React.ReactNode;
}

export const ToolbarItem: React.FC<ToolbarItemProps> = ({
  height,
  asSeparator = false,
  children,
  tooltip,
  ...restNativeProps
}) => {
  return (
    <StyledToolbarItem
      {...restNativeProps}
      $height={height}
      asSeparator={asSeparator}
      title={tooltip}
    >
      {!asSeparator && children}
    </StyledToolbarItem>
  );
};
