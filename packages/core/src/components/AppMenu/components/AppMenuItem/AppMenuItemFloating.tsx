import * as React from 'react';
import { useTheme } from 'styled-components';

import { Popover } from '../../../Popover';

interface AppMenuItemFloatingProps {
  children?: React.ReactNode;
  floatingStyles: React.CSSProperties;
  getFloatingProps: (
    userProps?: React.HTMLProps<HTMLElement>,
  ) => Record<string, unknown>;
  setFloating: (node: HTMLElement | null) => void;
  zIndex?: React.CSSProperties['zIndex'];
}

export const AppMenuItemFloating: React.FC<AppMenuItemFloatingProps> = ({
  children,
  floatingStyles,
  getFloatingProps,
  setFloating,
  zIndex,
}) => {
  const theme = useTheme();
  const evalZIndex = zIndex || theme.cmp.popover.elevation.zIndex.base - 1;
  return (
    <div
      ref={setFloating}
      style={{ ...floatingStyles, zIndex: evalZIndex }}
      {...getFloatingProps()}
    >
      <Popover.Panel
        maxWidth="unset"
        minWidth="unset"
        padding="cmp-xxs cmp-xs"
        zIndex={evalZIndex}
      >
        {children}
      </Popover.Panel>
    </div>
  );
};
