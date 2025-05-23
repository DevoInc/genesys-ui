import * as React from 'react';
import { useTheme } from 'styled-components';

import type { IGlobalAttrs } from '../../../../declarations';
import type { TAppMenuTooltip } from '../../declarations';
import { AppMenuContext } from '../../context';
import { getPxFromRem } from '../../../../helpers';
import { Popover } from '../../../Popover';
import { Typography } from '../../../Typography';
import { Box } from '../../../Box';
import {
  AppMenuItemInner,
  type AppMenuItemInnerProps,
} from './AppMenuItemInner';

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
      collapsed,
      onMouseOver,
      tooltip,
      isItem = false,
      ...appMenuItemInnerProps
    },
    ref,
  ) => {
    const theme = useTheme();
    const context = React.useContext(AppMenuContext);
    const evalCollapsed = collapsed ?? context.collapsed;
    const evalZIndex = theme.cmp.popover.elevation.zIndex.base - 1;
    const evalPopoverOffset =
      getPxFromRem(theme.cmp.appMenu.item.space.paddingRight.base) +
      getPxFromRem(theme.cmp.appMenu.item.space.offset.left);
    return (
      <Popover
        arrowConfig={
          evalCollapsed && {
            component: ({ placement, size }) => (
              <Popover.Arrow placement={placement} size={size} />
            ),
          }
        }
        delayOnOpen={400}
        id={id ? `popover-for-${id}` : undefined}
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, evalPopoverOffset],
            },
          },
        ]}
        placement={'right'}
        zIndex={evalZIndex}
      >
        {({ setOpened, ref: targetElRef }) => (
          <Box
            ref={targetElRef}
            as={isItem ? 'li' : 'div'}
            onMouseOver={
              onMouseOver || (evalCollapsed && (() => setOpened(true)))
            }
            onMouseLeave={evalCollapsed && (() => setOpened(false))}
          >
            <AppMenuItemInner
              {...appMenuItemInnerProps}
              ref={ref}
              collapsed={evalCollapsed}
              id={id}
              isItem={isItem}
              onMouseOver={onMouseOver}
            />
          </Box>
        )}
        {evalCollapsed &&
          (({ setOpened }) => (
            <Popover.Panel
              maxWidth="unset"
              minWidth="unset"
              onMouseLeave={() => setOpened(false)}
              padding="cmp-xxs cmp-xs"
              zIndex={evalZIndex}
            >
              <Typography.Paragraph>{tooltip}</Typography.Paragraph>
            </Popover.Panel>
          ))}
      </Popover>
    );
  },
);
