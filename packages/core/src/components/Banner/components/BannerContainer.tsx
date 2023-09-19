import * as React from 'react';

import {
  ActiveStatus,
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../declarations';

import { StyledBanner } from '../StyledBanner';

export interface BannerContainerProps
  extends StyledPolymorphicProps,
    StyledOverloadCssProps,
    GlobalAttrProps,
    GlobalAriaProps {
  children: React.ReactNode;
  status?: ActiveStatus;
}

export const BannerContainer: React.FC<BannerContainerProps> = ({
  as,
  children,
  className,
  id,
  role,
  status,
  styles,
  tooltip,
  ...ariaProps
}) => (
  <StyledBanner
    {...ariaProps}
    as={as}
    className={className}
    css={styles}
    id={id}
    role={role}
    status={status}
    title={tooltip}
  >
    {children}
  </StyledBanner>
);
