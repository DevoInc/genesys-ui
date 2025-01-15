import * as React from 'react';

import { VFlex, type VFlexProps } from '../VFlex';
import { UserInfoDetails, UserInfoAvatar } from './components';

export interface UserInfoProps extends VFlexProps {}

export const InternalUserInfo: React.FC<UserInfoProps> = ({
  children,
  ...restVFlexProps
}) => {
  return <VFlex {...restVFlexProps}>{children}</VFlex>;
};

export const UserInfo = InternalUserInfo as typeof InternalUserInfo & {
  Avatar: typeof UserInfoAvatar;
  Details: typeof UserInfoDetails;
};

UserInfo.Avatar = UserInfoAvatar;
UserInfo.Details = UserInfoDetails;

InternalUserInfo.displayName = 'UserInfo';
UserInfo.Avatar.displayName = 'UserInfo.Avatar';
UserInfo.Details.displayName = 'UserInfo.Details';
