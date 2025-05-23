import * as React from 'react';
import { useTheme } from 'styled-components';

import type {
  TAppMenuCollapsed,
  TAppMenuExpandable,
  TAppMenuCounter,
  TAppMenuIsBeta,
  TAppMenuState,
} from '../../declarations';
import { AppMenuContext } from '../../context';
import { mergeStyles } from '../../../../helpers';
import { appMenuItemLabelMixin, appMenuItemMixin } from './helpers';
import {
  GIAngleLeft,
  GIAngleRight,
  GIArrowRight,
} from '@devoinc/genesys-icons';
import { Icon } from '../../../Icon';
import { Flex } from '../../../Flex';
import { Badge } from '../../../Badge';
import { HFlex } from '../../../HFlex';
import { MenuItem, type MenuItemProps } from '../../../Menu/components';

export interface AppMenuItemInnerProps extends Omit<MenuItemProps, 'state'> {
  collapsed?: TAppMenuCollapsed;
  counter?: TAppMenuCounter;
  expandable?: TAppMenuExpandable;
  isBeta?: TAppMenuIsBeta;
  state?: TAppMenuState;
}

export const AppMenuItemInner = React.forwardRef<
  HTMLButtonElement,
  AppMenuItemInnerProps
>(
  (
    {
      children,
      collapsed,
      expandable,
      counter,
      icon,
      isBeta,
      label,
      state = 'enabled',
      style,
      ...restMenuItemProps
    },
    ref,
  ) => {
    const theme = useTheme();
    const context = React.useContext(AppMenuContext);
    const evalCollapsed = collapsed ?? context.collapsed;
    const labelAppend = (
      <>
        {isBeta ? (
          <Flex as="span" inline marginLeft="cmp-xs">
            <Badge
              size="sm"
              style={`background-color: ${
                theme.cmp.appMenu.betaBadge.color.background
              }; color: ${theme.cmp.appMenu.betaBadge.color.text}`}
              text="Beta"
            />
          </Flex>
        ) : undefined}
        {expandable ? (
          <Flex as="span" inline marginLeft="cmp-md">
            <Icon size="xs">
              <GIArrowRight />
            </Icon>
          </Flex>
        ) : undefined}
      </>
    );
    const counterBlock = (
      <Flex
        as="span"
        cssTranslate="-50%, 0"
        inline
        inset={
          evalCollapsed ? '-0.4rem auto auto 4rem' : '-0.4rem auto auto 4rem'
        }
        position="absolute"
      >
        <Badge size="sm" colorScheme="success" text={counter} />
      </Flex>
    );

    return (
      <MenuItem
        {...restMenuItemProps}
        ref={ref}
        label={
          <HFlex
            spacing="0"
            style={appMenuItemLabelMixin({
              collapsed: evalCollapsed,
              theme,
            })}
          >
            {label}
            {labelAppend}
          </HFlex>
        }
        prependContent={counter ? counterBlock : undefined}
        icon={
          <HFlex
            as="span"
            alignItems="center"
            style={{
              marginLeft:
                theme.cmp.appMenu.itemIcon.space.offset[
                  evalCollapsed ? 'collapse' : 'base'
                ],
            }}
            spacing="cmp-xxs"
          >
            <Icon size="sm">{icon}</Icon>
            {expandable &&
              evalCollapsed &&
              (state === 'expanded' ? (
                <GIAngleLeft size={11} />
              ) : (
                <GIAngleRight size={11} />
              ))}
          </HFlex>
        }
        state={state}
        style={mergeStyles(
          appMenuItemMixin({
            collapsed: evalCollapsed,
            state,
            theme,
          }),
          style,
        )}
      >
        {children}
      </MenuItem>
    );
  },
);
