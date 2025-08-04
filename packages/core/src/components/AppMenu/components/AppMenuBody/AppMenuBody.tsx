import * as React from 'react';

import { APP_MENU_BODY_CLASS_NAME_BASE } from '../../constants';
import { AppMenuContext } from '../../context';
import { Box } from '../../../Box';
import { Menu, type MenuProps } from '../../../Menu';

export interface AppMenuBodyProps extends Omit<MenuProps, 'spacing'> {}

export const AppMenuBody = React.forwardRef<HTMLDivElement, AppMenuBodyProps>(
  ({ children, className, ...appMenuBodyProps }, ref) => {
    const context = React.useContext(AppMenuContext);
    const classNames = [`${APP_MENU_BODY_CLASS_NAME_BASE} `, `${className} `]
      .join('')
      .trim();
    return (
      <Box
        ref={ref || context.bodyRef}
        className={classNames}
        flex="1 1 100%"
        overflow="auto"
        paddingBottom="cmp-xs"
        paddingTop="cmp-xs"
      >
        <Menu {...appMenuBodyProps} spacing="cmp-xs">
          {children}
        </Menu>
      </Box>
    );
  },
);
