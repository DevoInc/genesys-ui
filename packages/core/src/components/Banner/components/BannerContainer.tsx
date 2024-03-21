import * as React from 'react';

import {
  TActiveStatus,
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../declarations';

import { StyledBanner } from '../StyledBanner';

export interface BannerContainerProps
  extends IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs {
  children: React.ReactNode;
  status?: TActiveStatus;
}

export const BannerContainer: React.FC<BannerContainerProps> = ({
  as,
  children,
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
    css={styles}
    id={id}
    role={role}
    status={status}
    title={tooltip}
  >
    {children}
  </StyledBanner>
);
