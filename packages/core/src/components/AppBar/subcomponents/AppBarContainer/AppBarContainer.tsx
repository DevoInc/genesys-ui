import * as React from 'react';
import { useTheme } from 'styled-components';

import { HFlex } from '../../..';

import { StyledAppBarContainer } from './StyledContainer';
import { GlobalAriaProps, GlobalAttrProps } from '../../../../declarations';

export interface AppBarContainerProps extends GlobalAttrProps, GlobalAriaProps {
  children?: React.ReactNode;
  /** Define the elevation styles of the container */
  sticky?: boolean;
}

export const AppBarContainer: React.FC<AppBarContainerProps> = ({
  children,
  id,
  sticky = false,
  ...nativeProps
}) => {
  const elevation = sticky ? 'stickyBottom' : 'ground';
  const tabsContainerTokens = useTheme().cmp.tabs.container;

  return (
    <StyledAppBarContainer
      {...nativeProps}
      id={`${id}__container`}
      elevation={elevation}
    >
      <HFlex alignItems="center" height={tabsContainerTokens.size.height.lg}>
        {children}
      </HFlex>
    </StyledAppBarContainer>
  );
};
