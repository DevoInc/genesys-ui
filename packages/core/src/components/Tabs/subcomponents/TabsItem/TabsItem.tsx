import * as React from 'react';

import { GlobalAttrProps } from '../../../../declarations';

import { LinkProps } from '../../../Link';

import {
  StyledTabsClose,
  StyledTabsCloseProps,
  StyledTabsItem,
  StyledTabsLink,
  StyledTabsIcon,
  StyledTabsItemProps,
  StyledTabsIconProps,
} from './styled';

export interface TabsItemProps
  extends Pick<StyledTabsCloseProps, 'state' | 'tooltip'>,
    Pick<LinkProps, 'href' | 'target'>,
    StyledTabsItemProps {
  /** A title or description of the element, typically displayed as a tooltip when hovering over the element */
  closeTooltip?: GlobalAttrProps['tooltip'];
  /** This property defines the icon type */
  icon?: StyledTabsIconProps['iconId'];
  /** Tab label */
  label: string;
  /** Action when click on close tab button */
  onActionClick?: () => void;
  /** Action when click on tab */
  onTabClick?: () => void;
}

export const TabsItem: React.FC<TabsItemProps> = ({
  closeTooltip,
  href,
  icon,
  label,
  onActionClick,
  onTabClick,
  size = 'md',
  state = 'enabled',
  target,
  tooltip = 'Close',
  wide = false,
}) => {
  const tunedOnActionClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onActionClick?.();
  };

  const disabled: boolean = state === 'disabled';

  return (
    <StyledTabsItem
      aria-selected={state === 'selected'}
      size={size}
      wide={wide}
      title={tooltip}
    >
      <StyledTabsLink
        state={state}
        size={size}
        onClick={disabled ? undefined : onTabClick}
        href={href}
        target={target}
      >
        {icon && <StyledTabsIcon iconId={icon} />}
        {label}
        {onActionClick && (
          <StyledTabsClose
            state={state}
            tooltip={closeTooltip}
            onClick={tunedOnActionClick}
          />
        )}
      </StyledTabsLink>
    </StyledTabsItem>
  );
};
