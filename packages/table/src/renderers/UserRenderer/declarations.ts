import { UserInfoAvatarProps } from '@devoinc/genesys-ui';

export type TContextUser = {
  panelWidth?: string;
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
