import * as React from 'react';

import {
  type Resolve,
  type GlobalAttrProps,
  type LinkProps,
} from '../../../../index';
import {
  TabsItemClose,
  type TabsItemCloseProps,
  TabsItemContainer,
  type TabsItemContainerProps,
  TabsItemIcon,
  type TabsItemIconProps,
  TabsItemLink,
} from './components';

export interface TabsItemProps
  extends Pick<TabsItemCloseProps, 'state' | 'tooltip'>,
    Pick<LinkProps, 'href' | 'target'>,
    Pick<TabsItemContainerProps, 'onClick' | 'size' | 'wide'> {
  /** A title or description of the element, typically displayed as a tooltip when hovering over the element */
  closeTooltip?: GlobalAttrProps['tooltip'];
  /** This property defines the icon type */
  icon?: TabsItemIconProps['iconId'];
  /** Tab label */
  label: string;
  /** Action when click on close tab button */
  onClose?: () => void;
}

export const InternalTabsItem: React.FC<Resolve<TabsItemProps>> = ({
  closeTooltip,
  href,
  icon,
  label,
  onClose,
  onClick,
  size = 'md',
  state = 'enabled',
  target,
  tooltip = 'Close',
  wide = false,
}) => (
  <TabsItemContainer
    aria-selected={state === 'selected'}
    size={size}
    wide={wide}
    tooltip={tooltip}
  >
    <TabsItemLink
      state={state}
      size={size}
      onClick={state === 'disabled' ? undefined : onClick}
      href={href}
      target={target}
    >
      {icon && <TabsItemIcon iconId={icon} />}
      {label}
      {onClose && (
        <TabsItemClose
          state={state}
          tooltip={closeTooltip}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClose?.();
          }}
        />
      )}
    </TabsItemLink>
  </TabsItemContainer>
);

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
