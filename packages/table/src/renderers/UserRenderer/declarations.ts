import { UserInfoAvatarProps } from '@devoinc/genesys-ui';

export type TContextUser = {
  userMapping?: {
    [key: string]: {
      name: string;
      avatar?: string;
      colorScheme?: UserInfoAvatarProps['avatarColorScheme'];
      email?: string;
      job?: string;
      role?: string;
      subtitle?: string;
      initials?: string;
      isCurrentUser?: boolean;
    };
  };
};
