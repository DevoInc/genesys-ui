import * as React from 'react';
import { concat } from 'lodash';
import { useTheme } from 'styled-components';

import { linkStateMap } from '../../../utils';
import { tabsLinkMixin, type ITabsLinkMixin } from './helpers';
import type { Resolve } from '../../../../../typeFunctions';
import { Link, type LinkProps } from '../../../../Link';

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
  styles,
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
      state={linkStateMap[state]}
      styles={concat(tabsLinkMixin({ closable, theme, size, state }), styles)}
      tabIndex={tabIndex || (state === 'selected' ? 0 : -1)}
    >
      {children}
    </Link>
  );
};
