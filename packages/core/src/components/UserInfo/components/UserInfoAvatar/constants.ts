import { TUserInfoFormat, TUserInfoSize } from '../../declarations';
import type { TypographyProps } from '../../../Typography';
import { AvatarProps } from '../../../Avatar';

export const USER_INFO_SIZE_HEADING_FORMAT_MAP: {
  [key in TUserInfoSize]: TypographyProps['format'];
} = {
  sm: 'heading-h6',
  md: 'heading-h4',
  lg: 'heading-h3',
};

export const USER_INFO_SIZE_SUBTITLE_FORMAT_MAP: {
  [key in TUserInfoSize]: TypographyProps['format'];
} = {
  sm: 'body-xs',
  md: 'body-sm',
  lg: 'body-md',
};

export const USER_INFO_SIZE_AVATAR_MAP: {
  [key in TUserInfoFormat]: {
    [key in TUserInfoSize]: AvatarProps['size'];
  };
} = {
  base: {
    sm: 'xxxs',
    md: 'xxs',
    lg: 'xs',
  },
  bold: {
    sm: 'xxxs',
    md: 'xxs',
    lg: 'xs',
  },
  heading: {
    sm: 'md',
    md: 'lg',
    lg: 'xl',
  },
};
