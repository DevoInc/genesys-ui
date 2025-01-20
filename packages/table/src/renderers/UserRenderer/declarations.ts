import { UserInfoAvatarProps } from '@devoinc/genesys-ui';

export type TContextOptions = {
  avatar?: string;
  colorScheme?: UserInfoAvatarProps['avatarColorScheme'];
  email?: string;
  job?: string;
  role?: string;
  subtitle?: string;
};
