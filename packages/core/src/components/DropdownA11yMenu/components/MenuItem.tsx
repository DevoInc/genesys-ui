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
  tooltip?: { label: string; config: any }; // TODO add config types
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

  if (tooltip?.label) {
    tooltipProps.target = {
      'data-for': label,
      'data-tip': tooltip.label,
    };

    tooltipProps.config = {
      effect: 'solid',
      delayShow: 150,
      offset: { top: -15 },
      ...tooltip.config,
      place: 'top',
    };
  }

  return (
    <StyledMenuItem
      role={'none'}
      disabled={disabled}
      highlighted={highlighted}
      selected={selected}
    >
      <MenuAccessibility
        disabled={disabled}
        ref={forwardedRef}
        {...tooltipProps.target}
        {...rest}
      >
        {children}
        {tooltip?.label && <Tooltip id={label} {...tooltipProps.config} />}
      </MenuAccessibility>
    </StyledMenuItem>
  );
};
