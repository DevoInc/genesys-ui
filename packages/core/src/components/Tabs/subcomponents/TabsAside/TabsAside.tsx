import * as React from 'react';
import { GlobalAriaProps, GlobalAttrProps } from '../../../../declarations';

import { StyledTabsAside, StyledTabsDivider } from '../../styled';

export interface TabsAsideProps extends GlobalAttrProps, GlobalAriaProps {
  /** Array of TabItems */
  children?: React.ReactNode;
}

export const TabsAside: React.FC<TabsAsideProps> = ({
  children,
  ...nativeProps
}) => (
  <StyledTabsAside {...nativeProps}>
    <StyledTabsDivider vertical height="100%" />
    {children}
  </StyledTabsAside>
);
