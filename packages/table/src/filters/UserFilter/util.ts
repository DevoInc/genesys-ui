import { UserInfoAvatarProps } from '@devoinc/genesys-ui';

export type TInput = {
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

export const concatenateValues = (input: TInput): { [key: string]: string } => {
  const result = {};
  for (const key in input) {
    if (input.hasOwnProperty(key)) {
      result[key] =
        `${String(input[key].name).toLowerCase()}${String(input[key]?.subtitle || '').toLowerCase()}`;
    }
  }
  return result;
};
