import * as React from 'react';
import { useTheme } from 'styled-components';
import {
  arrow,
  autoUpdate,
  flip,
  FloatingArrow,
  FloatingPortal,
  offset,
  useFloating,
  useHover,
  useInteractions,
} from '@floating-ui/react';

import type { IGlobalAttrs } from '../../../../declarations';
import type { TAppMenuTooltip } from '../../declarations';
import { AppMenuContext } from '../../context';
import { getPxFromRem } from '../../../../helpers';
import { Typography } from '../../../Typography';
import { Box } from '../../../Box';
import {
  AppMenuItemInner,
  type AppMenuItemInnerProps,
} from './AppMenuItemInner';
import { AppMenuItemFloating } from './AppMenuItemFloating';

export interface AppMenuItemProps
  extends Pick<IGlobalAttrs, 'id'>,
    AppMenuItemInnerProps {
  tooltip?: TAppMenuTooltip;
}

export const AppMenuItem = React.forwardRef<
  HTMLButtonElement,
  AppMenuItemProps
>(
  (
    {
      id,
      collapsed: userCollapsed,
      onMouseOver,
      tooltip,
      isItem = false,
      ...appMenuItemInnerProps
    },
    ref,
  ) => {
    const theme = useTheme();
    const menuContext = React.useContext(AppMenuContext);
    const collapsed = userCollapsed ?? menuContext.collapsed;
    const evalZIndex = theme.cmp.popover.elevation.zIndex.base - 1;
    const evalPopoverOffset =
      getPxFromRem(theme.cmp.appMenu.item.space.paddingRight.base) +
      getPxFromRem(theme.cmp.appMenu.item.space.offset.left);

    const arrowRef = React.useRef(null);
    const [isOpen, setIsOpen] = React.useState(false);
    const { refs, floatingStyles, context } = useFloating({
      open: isOpen,
      onOpenChange: setIsOpen,
      placement: 'right',
      whileElementsMounted: autoUpdate,
      middleware: [
        offset(evalPopoverOffset),
        flip(),
        arrow({
          element: arrowRef,
        }),
      ],
    });
    const hover = useHover(context, {
      enabled: collapsed,
      delay: {
        open: 400,
        close: 0,
      },
    });

    const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

    return (
      <>
        <Box
          ref={refs.setReference}
          {...getReferenceProps()}
          as={isItem ? 'li' : 'div'}
        >
          <AppMenuItemInner
            {...appMenuItemInnerProps}
            ref={ref}
            collapsed={collapsed}
            id={id}
            isItem={isItem}
            onMouseOver={onMouseOver}
          />
        </Box>
        {isOpen && collapsed && (
          <FloatingPortal>
            <AppMenuItemFloating
              setFloating={refs.setFloating}
              getFloatingProps={getFloatingProps}
              floatingStyles={floatingStyles}
              zIndex={evalZIndex}
            >
              <Typography.Paragraph>{tooltip}</Typography.Paragraph>
              <FloatingArrow
                ref={arrowRef}
                context={context}
                fill={theme.cmp.panel.color.background}
                style={{ zIndex: evalZIndex + 1, marginRight: '-1px' }}
                stroke={theme.cmp.panel.color.border.activated}
                strokeWidth={1}
              />
            </AppMenuItemFloating>
          </FloatingPortal>
        )}
      </>
    );
  },
);
