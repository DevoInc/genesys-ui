import * as React from 'react';

import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';
import type { IBanner } from '../../declarations';
import { BannerContext } from '../../context';

import { StyledBannerContainer } from './StyledBannerContainer';

export interface BannerContainerProps
  extends IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    Pick<IBanner, 'children' | 'status' | 'subtle'> {}

export const BannerContainer: React.FC<BannerContainerProps> = ({
  as,
  children,
  id,
  role,
  status,
  style,
  subtle,
  tooltip,
  ...ariaProps
}) => (
  <StyledBannerContainer
    {...ariaProps}
    as={as}
    css={style}
    id={id}
    role={role}
    $status={status}
    $subtle={subtle}
    title={tooltip}
  >
    <BannerContext.Provider value={{ status, subtle }}>
      {children}
    </BannerContext.Provider>
  </StyledBannerContainer>
);
