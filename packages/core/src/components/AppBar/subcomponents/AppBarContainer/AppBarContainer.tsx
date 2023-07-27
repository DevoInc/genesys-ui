import * as React from 'react';
import { useTheme } from 'styled-components';

import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../../declarations';

import { HFlex } from '../../..';

import { StyledAppBarContainer } from './StyledContainer';

export interface AppBarContainerProps
  extends GlobalAttrProps,
    GlobalAriaProps,
    StyledPolymorphicProps,
    StyledOverloadCssProps {
  children?: React.ReactNode;
  /** Define the elevation styles of the container */
  sticky?: boolean;
}

export const AppBarContainer: React.FC<AppBarContainerProps> = ({
  children,
  id,
  sticky = false,
  tooltip,
  ...nativeProps
}) => {
  const elevation = sticky ? 'stickyBottom' : 'ground';
  const tabsContainerTokens = useTheme().cmp.tabs.container;

  return (
    <StyledAppBarContainer
      {...nativeProps}
      id={id ? `${id}__container` : null}
      elevation={elevation}
      title={tooltip}
    >
      <HFlex alignItems="center" height={tabsContainerTokens.size.height.lg}>
        {children}
      </HFlex>
    </StyledAppBarContainer>
  );
};
