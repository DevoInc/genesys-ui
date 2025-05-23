import * as React from 'react';
import { useTheme } from 'styled-components';
import { mergeStyles } from '../../../../helpers';

import type { IAppMenu } from '../../declarations';
import { AppMenuContext } from '../../context';
import { appMenuSeparatorMixin } from './helpers';
import {
  MenuSeparator,
  type MenuSeparatorProps,
} from '../../../Menu/components';

export interface AppMenuSeparatorProps
  extends MenuSeparatorProps,
    Pick<IAppMenu, 'collapsed'> {}

export const AppMenuSeparator: React.FC<AppMenuSeparatorProps> = ({
  collapsed,
  style,
}) => {
  const theme = useTheme();
  const context = React.useContext(AppMenuContext);
  const evalCollapsed = collapsed ?? context.collapsed;
  return (
    <MenuSeparator
      style={mergeStyles(
        appMenuSeparatorMixin({ collapsed: evalCollapsed, theme }),
        style,
      )}
    />
  );
};
