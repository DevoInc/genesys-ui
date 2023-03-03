import * as React from 'react';

import { LinkProps } from '../../../index';

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
            tooltip={tooltip}
            onClick={tunedOnActionClick}
          />
        )}
      </StyledTabsLink>
    </StyledTabsItem>
  );
};
