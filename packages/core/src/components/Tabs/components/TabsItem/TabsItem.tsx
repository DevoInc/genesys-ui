import * as React from 'react';

import type {
  IDataAttrs,
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IMouseEventAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';
import type { FlexProps } from '../../../Flex';
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
import { StyledTabsItemLabel } from './StyledTabsItemLabel';

export interface TabsItemProps
  extends IGlobalAttrs,
    IGlobalAriaAttrs,
    IDataAttrs,
    IStyledOverloadCss,
    IStyledPolymorphic,
    IMouseEventAttrs,
    Pick<FlexProps, 'maxWidth' | 'minWidth' | 'width'>,
    Pick<
      LinkProps,
      | 'aria-controls'
      | 'aria-expanded'
      | 'aria-haspopup'
      | 'href'
      | 'target'
      | 'rel'
    >,
    Pick<ITabs, 'align' | 'size' | 'wide'> {
  /** A title or description of the element, typically displayed as a tooltip when hovering over the element */
  closeTooltip?: IGlobalAttrs['tooltip'];
  /** This property defines the icon type */
  icon?: IconProps['children'];
  /** Tab label */
  label: React.ReactNode;
  /** Action when click on close tab button */
  onClose?: () => void;
  /** Possible states */
  state?: TTabsItemState;
}

export const InternalTabsItem = React.forwardRef<
  HTMLDivElement,
  Resolve<TabsItemProps>
>(
  (
    {
      align,
      as,
      closeTooltip,
      href,
      icon,
      label,
      maxWidth,
      minWidth,
      onClose,
      onClick,
      rel,
      size,
      state = 'enabled',
      target,
      tooltip,
      wide,
      width,
      ...restProps
    },
    ref,
  ) => {
    const context = React.useContext(TabsContext);
    const evalWide = wide || context.wide;
    const evalSize = size || context.size || 'md';
    const evalAlign = align || context.align || 'middle';

    return (
      <TabsItemContainer
        ref={ref}
        align={evalAlign}
        as={as}
        maxWidth={maxWidth}
        minWidth={minWidth}
        size={evalSize}
        wide={evalWide}
        width={width}
      >
        <TabsItemLink
          {...restProps}
          align={evalAlign}
          state={state}
          size={evalSize}
          onClick={state === 'disabled' ? undefined : onClick}
          closable={Boolean(onClose)}
          href={href}
          rel={rel}
          target={target}
          tooltip={tooltip}
        >
          {icon && <TabsItemIcon size={evalSize}>{icon}</TabsItemIcon>}
          <StyledTabsItemLabel>{label}</StyledTabsItemLabel>
        </TabsItemLink>
        {onClose && (
          <TabsItemClose
            align={evalAlign}
            size={evalSize}
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
  },
);

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

InternalTabsItem.displayName = 'TabsItem';
TabsItem._Close.displayName = 'TabsItem._Close';
TabsItem._Container.displayName = 'TabsItem._Container';
TabsItem._Icon.displayName = 'TabsItem._Icon';
TabsItem._Link.displayName = 'TabsItem._Link';
