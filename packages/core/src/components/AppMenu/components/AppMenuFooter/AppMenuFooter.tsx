import * as React from 'react';

import type { ITriggerEventAttrs } from '../../../../declarations';
import type { IAppMenu } from '../../declarations';
import { GIArrowLeft, GIArrowRight } from '@devoinc/genesys-icons';
import { AppMenuContext } from '../../context';
import { StyledAppMenuFooter } from './StyledAppMenuFooter';
import { Box } from '../../../Box';
import { AppMenuItem } from '../AppMenuItem';

export interface AppMenuFooterProps
  extends Pick<ITriggerEventAttrs, 'onClick'>,
    Pick<IAppMenu, 'collapsed' | 'collapseLabel' | 'expandLabel'> {
  children?: React.ReactNode;
}

export const AppMenuFooter = React.forwardRef<
  HTMLButtonElement,
  AppMenuFooterProps
>(
  (
    {
      children,
      collapsed,
      collapseLabel = 'Collapse menu',
      expandLabel = 'Expand menu',
      onClick,
    },
    ref,
  ) => {
    const context = React.useContext(AppMenuContext);
    const evalCollapsed = collapsed ?? context.collapsed;
    const hasScroll = context.scrolledBodyContent;
    return (
      <StyledAppMenuFooter $hasScroll={hasScroll}>
        <Box flex="1 1 auto">
          {children || (
            <AppMenuItem
              ref={ref}
              aria-label={evalCollapsed ? expandLabel : null}
              collapsed={evalCollapsed}
              icon={evalCollapsed ? <GIArrowRight /> : <GIArrowLeft />}
              isItem={false}
              label={evalCollapsed ? '' : collapseLabel}
              onClick={onClick || context.onChange}
              role={null}
              tooltip={evalCollapsed ? expandLabel : null}
            />
          )}
        </Box>
      </StyledAppMenuFooter>
    );
  },
);
