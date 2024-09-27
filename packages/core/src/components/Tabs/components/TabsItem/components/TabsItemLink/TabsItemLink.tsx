import * as React from 'react';
import { useTheme } from 'styled-components';

import { tabsLinkMixin, type ITabsLinkMixin } from '../helpers';
import type { Resolve } from '../../../../../../typeFunctions';
import { Link, type LinkProps } from '../../../../../Link';
import { mergeStyles } from '../../../../../../helpers';

export interface TabsItemLinkProps
  extends Omit<LinkProps, 'role' | 'size' | 'state'>,
    Omit<ITabsLinkMixin, 'theme'> {
  children?: React.ReactNode;
}

export const TabsItemLink: React.FC<Resolve<TabsItemLinkProps>> = ({
  'aria-selected': ariaSelected,
  children,
  closable,
  size,
  state,
  style,
  tabIndex,
  ...restLinkProps
}) => {
  const theme = useTheme();
  return (
    <Link
      {...restLinkProps}
      aria-selected={ariaSelected || state === 'selected'}
      aria-disabled={state === 'disabled' ? true : undefined}
      role="tab"
      state={state === 'selected' ? 'enabled' : state}
      style={mergeStyles(
        tabsLinkMixin({ closable, theme, size, state }),
        style,
      )}
      tabIndex={tabIndex || (state === 'selected' ? 0 : -1)}
    >
      {children}
    </Link>
  );
};
