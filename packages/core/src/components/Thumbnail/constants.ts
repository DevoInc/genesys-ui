import { ThumbnailSize } from './declarations';

export const ThumbSizeMap: { [key in ThumbnailSize]: string } = {
  xs: '8rem',
  sm: '8rem',
  md: '9.2rem',
  lg: '11.6rem',
  xl: '12rem',
  fullWidth: '100%',
} as const;
