import * as React from 'react';
import { useTheme } from 'styled-components';

import { HFlex } from '../HFlex';
import {
  AppBarUserOptions,
  AppBarStraightContent,
  AppBarStraightContentProps,
  AppBarUserOptionsProps,
} from './components';

import { StyledAppBarContainer } from './StyledAppBarContainer';
import { GlobalAriaProps, GlobalAttrProps } from '../../declarations';

export interface AppBarProps
  extends Pick<AppBarStraightContentProps, 'tabs' | 'mainActions'>,
    Pick<AppBarUserOptionsProps, 'userOptions'>,
    // native
    GlobalAttrProps,
    GlobalAriaProps {
  customContent?: React.ReactNode;
  sticky?: boolean;
}

export const AppBar: React.FC<AppBarProps> = ({
  customContent,
  id,
  mainActions,
  sticky = false,
  tabs,
  title,
  userOptions,
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
        {customContent || (
          <AppBarStraightContent
            id={id}
            mainActions={mainActions}
            tabs={tabs}
            title={title}
          />
        )}
        {userOptions && <AppBarUserOptions id={id} userOptions={userOptions} />}
      </HFlex>
    </StyledAppBarContainer>
  );
};
