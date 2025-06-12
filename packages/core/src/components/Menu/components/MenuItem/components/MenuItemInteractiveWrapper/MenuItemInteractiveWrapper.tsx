import * as React from 'react';

import type { IMenuItem, IMenuItemBasic } from '../../declarations';
import type { Resolve } from '../../../../../../typeFunctions';
import { StyledMenuItemInteractiveWrapper } from './StyledMenuItemInteractiveWrapper';

export interface MenuItemContainerProps
  extends Pick<IMenuItemBasic, 'as' | 'style'>,
    Pick<IMenuItem, 'children'> {}

export const MenuItemInteractiveWrapper = React.forwardRef<
  HTMLDivElement,
  Resolve<MenuItemContainerProps>
>(({ as, children, style }, ref) => (
  <StyledMenuItemInteractiveWrapper as={as} ref={ref} css={style}>
    {children}
  </StyledMenuItemInteractiveWrapper>
));
