import * as React from 'react';

import { GlobalAttrProps } from '../../../../declarations';

import { LinkProps } from '../../../Link';

import {
  TabsItemClose,
  TabsItemCloseProps,
  TabsItemContainer,
  TabsItemContainerProps,
  TabsItemIcon,
  TabsItemIconProps,
  TabsItemLink,
} from './components';

export interface TabsItemProps
  extends Pick<TabsItemCloseProps, 'state' | 'tooltip'>,
    Pick<LinkProps, 'href' | 'target'>,
    TabsItemContainerProps {
  /** A title or description of the element, typically displayed as a tooltip when hovering over the element */
  closeTooltip?: GlobalAttrProps['tooltip'];
  /** This property defines the icon type */
  icon?: TabsItemIconProps['iconId'];
  /** Tab label */
  label: string;
  /** Action when click on close tab button */
  onActionClick?: () => void;
  /** Action when click on tab */
  onTabClick?: () => void;
}

export const InternalTabsItem: React.FC<TabsItemProps> = ({
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
    <TabsItemContainer
      aria-selected={state === 'selected'}
      size={size}
      wide={wide}
      tooltip={tooltip}
    >
      <TabsItemLink
        state={state}
        size={size}
        onClick={disabled ? null : onTabClick}
        href={href}
        target={target}
      >
        {icon && <TabsItemIcon iconId={icon} />}
        {label}
        {onActionClick && (
          <TabsItemClose
            state={state}
            tooltip={closeTooltip}
            onClick={tunedOnActionClick}
          />
        )}
      </TabsItemLink>
    </TabsItemContainer>
  );
};

export const TabsItem = InternalTabsItem as typeof InternalTabsItem & {
  Close: typeof TabsItemClose;
  Container: typeof TabsItemContainer;
  Icon: typeof TabsItemIcon;
  Link: typeof TabsItemLink;
};

TabsItem.Close = TabsItemClose;
TabsItem.Container = TabsItemContainer;
TabsItem.Icon = TabsItemIcon;
TabsItem.Link = TabsItemLink;
