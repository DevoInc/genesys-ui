import * as React from 'react';

import { StyledOverloadCssProps } from '../../../../declarations';

import { StyledTabsMark, StyledTabsMarkProps } from './StyledTabsMark';

export interface TabsMarkProps
  extends StyledTabsMarkProps,
    StyledOverloadCssProps {}

export const TabsMark = React.forwardRef<HTMLDivElement, TabsMarkProps>(
  ({ colorScheme, styles }, ref) => (
    <StyledTabsMark colorScheme={colorScheme} ref={ref} css={styles} />
  ),
);

TabsMark.displayName = 'TabsMark';
