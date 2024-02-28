import { FieldSize, IconButtonProps } from '@devoinc/genesys-ui';

export const REAL_TIME_SIZE_MAP: {
  [key in FieldSize]: IconButtonProps['size'];
} = {
  sm: 'xxs',
  md: 'xs',
  lg: 'sm',
};
