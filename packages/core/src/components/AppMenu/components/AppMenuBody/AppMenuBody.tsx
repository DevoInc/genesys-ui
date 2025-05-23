import * as React from 'react';

import type { IAppMenu } from '../../declarations';
import { AppMenuContext } from '../../context';
import { Box } from '../../../Box';
import { Menu, type MenuProps } from '../../../Menu';

export interface AppMenuBodyProps
  extends Omit<MenuProps, 'cmpRole' | 'spacing'>,
    Pick<IAppMenu, 'menuRole'> {}

export const AppMenuBody = React.forwardRef<HTMLDivElement, AppMenuBodyProps>(
  ({ children, menuRole = 'nav', ...appMenuBodyProps }, ref) => {
    const context = React.useContext(AppMenuContext);
    return (
      <Box
        ref={ref || context.bodyRef}
        flex="1 1 100%"
        overflow="auto"
        paddingBottom="cmp-xs"
        paddingTop="cmp-xs"
        style={`&::-webkit-scrollbar { display: none; }`}
      >
        <Menu
          {...appMenuBodyProps}
          cmpRole={menuRole || context.menuRole}
          spacing="cmp-xs"
        >
          {children}
        </Menu>
      </Box>
    );
  },
);
