import * as React from 'react';

import { VFlex } from '../../VFlex';

export interface BannerContentContainerProps {
  children: React.ReactNode;
}

export const BannerContentContainer: React.FC<BannerContentContainerProps> = ({
  children,
}) => (
  <VFlex flex="1 1 auto" spacing="cmp-sm">
    {children}
  </VFlex>
);
