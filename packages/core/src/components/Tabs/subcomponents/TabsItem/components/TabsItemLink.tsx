import * as React from 'react';
import { concat } from 'lodash';
import { useTheme } from 'styled-components';

import { linkStateMap } from '../../../utils';
import { tabsLinkMixin, TabsLinkMixinProps } from './helpers';

import { Link, LinkProps } from '../../../../Link';

export interface TabsItemLinkProps
  extends Omit<LinkProps, 'size' | 'state'>,
    Omit<TabsLinkMixinProps, 'theme'> {
  children?: React.ReactNode;
}

export const TabsItemLink: React.FC<TabsItemLinkProps> = ({
  children,
  size,
  state,
  styles,
  ...restLinkProps
}) => {
  const theme = useTheme();
  return (
    <Link
      {...restLinkProps}
      state={linkStateMap[state]}
      styles={concat(tabsLinkMixin({ theme, size, state }), styles)}
    >
      {children}
    </Link>
  );
};
