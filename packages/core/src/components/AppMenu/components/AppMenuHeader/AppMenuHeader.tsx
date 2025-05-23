import * as React from 'react';

import type { IAppMenu } from '../../declarations';
import { AppMenuContext } from '../../context';
import { StyledAppMenuHeader } from './StyledAppMenuHeader';
import { StyledAppMenuHeaderLogo } from './StyledAppMenuHeaderLogo';
import { StyledAppMenuHeaderLogoCompact } from './StyledAppMenuHeaderLogoCompact';

export interface AppMenuHeaderProps
  extends Pick<IAppMenu, 'collapsed' | 'collapsedLogo' | 'logo' | 'logoAlt'> {
  children?: React.ReactNode;
}

export const AppMenuHeader: React.FC<AppMenuHeaderProps> = ({
  children,
  collapsed,
  collapsedLogo,
  logo,
  logoAlt,
}) => {
  const context = React.useContext(AppMenuContext);
  const evalCollapsed = collapsed ?? context.collapsed;
  const hasScroll = context.scrolledBodyContent;
  return (
    <StyledAppMenuHeader $hasScroll={hasScroll} $collapsed={evalCollapsed}>
      {children || (
        <>
          {collapsedLogo && (
            <StyledAppMenuHeaderLogoCompact
              alt={logoAlt}
              src={collapsedLogo}
              $collapsed={evalCollapsed}
            />
          )}
          {logo && (
            <StyledAppMenuHeaderLogo
              alt={logoAlt}
              src={logo}
              $collapsed={evalCollapsed}
            />
          )}
        </>
      )}
    </StyledAppMenuHeader>
  );
};
