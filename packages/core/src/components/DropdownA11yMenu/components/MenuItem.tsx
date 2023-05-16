import * as React from 'react';

import { Tooltip } from '../../';

import { MenuAccessibility, MenuAccessibilityProps } from './MenuAccessibility';
import { StyledMenuItem, StyledMenuItemProps } from '../styled';

interface MenuItemProps extends StyledMenuItemProps, MenuAccessibilityProps {
  /** Forward item reference to manage the item's accessibility actions */
  forwardedRef?: React.Ref<HTMLElement>;
  /** Label of the item */
  label?: string;
  /** Tooltip on item hover. This is object with the tooltip confg: Label, position, ... */
  tooltip?: string;
  children?: React.ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  disabled,
  highlighted,
  selected,
  label,
  tooltip,
  children,
  forwardedRef,
  ...rest
}) => {
  const tooltipProps = {
    target: {},
    config: {},
  };

  return (
    <StyledMenuItem
      role={'none'}
      disabled={disabled}
      highlighted={highlighted}
      selected={selected}
      title={tooltip}
    >
      <MenuAccessibility disabled={disabled} ref={forwardedRef} {...rest}>
        {children}
      </MenuAccessibility>
    </StyledMenuItem>
  );
};
