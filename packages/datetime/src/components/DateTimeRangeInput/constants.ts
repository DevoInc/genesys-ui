import { TFieldSize, IconButtonProps } from '@devoinc/genesys-ui';

export const REAL_TIME_SIZE_MAP: {
  [key in TFieldSize]: IconButtonProps['size'];
} = {
  sm: 'xxs',
  md: 'xs',
  lg: 'sm',
};
