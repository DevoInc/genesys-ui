import { UserInfoAvatarProps } from '@devoinc/genesys-ui';

export type TContextOptions = {
  userMapping?: {
    [key: string]: {
      name: string;
      avatar?: string;
      colorScheme?: UserInfoAvatarProps['avatarColorScheme'];
      email?: string;
      job?: string;
      role?: string;
      subtitle?: string;
    };
  };
};
