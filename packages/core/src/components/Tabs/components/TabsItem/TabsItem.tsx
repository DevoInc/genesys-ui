import * as React from 'react';

import type {
  IDataAttrs,
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IMouseEventAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';
import type { LinkProps } from '../../../Link';
import type { ITabs, TTabsItemState } from '../../declarations';
import type { IconProps } from '../../../Icon';
import type { Resolve } from '../../../../typeFunctions';
import { TabsContext } from '../../context';

import {
  TabsItemClose,
  TabsItemContainer,
  TabsItemIcon,
  TabsItemLink,
} from './components';

export interface TabsItemProps
  extends IGlobalAttrs,
    IGlobalAriaAttrs,
    IDataAttrs,
    IStyledOverloadCss,
    IStyledPolymorphic,
    IMouseEventAttrs,
    Pick<LinkProps, 'href' | 'target' | 'rel'>,
    Pick<ITabs, 'size' | 'wide'> {
  /** A title or description of the element, typically displayed as a tooltip when hovering over the element */
  closeTooltip?: IGlobalAttrs['tooltip'];
  /** This property defines the icon type */
  icon?: IconProps['children'];
  /** Tab label */
  label: string;
  /** Action when click on close tab button */
  onClose?: () => void;
  /** Possible states */
  state?: TTabsItemState;
}

export const InternalTabsItem: React.FC<Resolve<TabsItemProps>> = ({
  as,
  closeTooltip,
  href,
  icon,
  label,
  onClose,
  onClick,
  rel,
  size,
  state = 'enabled',
  target,
  tooltip,
  wide,
  ...dataProps
}) => {
  const context = React.useContext(TabsContext);
  const evalWide = wide || context.wide;
  const evalSize = size || context.size;

  return (
    <TabsItemContainer as={as} size={evalSize} wide={evalWide}>
      <TabsItemLink
        {...dataProps}
        state={state}
        size={evalSize}
        onClick={state === 'disabled' ? undefined : onClick}
        closable={Boolean(onClose)}
        href={href}
        rel={rel}
        target={target}
        tooltip={tooltip}
      >
        {icon && <TabsItemIcon>{icon}</TabsItemIcon>}
        {label}
      </TabsItemLink>
      {onClose && (
        <TabsItemClose
          state={state}
          tooltip={closeTooltip}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClose();
          }}
        />
      )}
    </TabsItemContainer>
  );
};

export const TabsItem = InternalTabsItem as typeof InternalTabsItem & {
  _Close: typeof TabsItemClose;
  _Container: typeof TabsItemContainer;
  _Icon: typeof TabsItemIcon;
  _Link: typeof TabsItemLink;
};

TabsItem._Close = TabsItemClose;
TabsItem._Container = TabsItemContainer;
TabsItem._Icon = TabsItemIcon;
TabsItem._Link = TabsItemLink;

InternalTabsItem.displayName = 'Tabs.Item';
TabsItem._Close.displayName = 'Tabs.Item._Close';
TabsItem._Container.displayName = 'Tabs.Item._Container';
TabsItem._Icon.displayName = 'Tabs.Item._Icon';
TabsItem._Link.displayName = 'Tabs.Item._Link';
