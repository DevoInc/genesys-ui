import * as React from 'react';

import type { IBanner } from '../../declarations';
import type { IStyledOverloadCss } from '../../../../declarations';
import { HFlex } from '../../../HFlex';

export interface BannerActionsProps
  extends IStyledOverloadCss,
    Pick<IBanner, 'children'> {}

export const BannerActions: React.FC<BannerActionsProps> = ({
  children,
  style,
}) => (
  <HFlex
    alignItems="center"
    flex="0 0 auto"
    justifyContent="flex-end"
    spacing="cmp-xs"
    style={style}
  >
    {children}
  </HFlex>
);
