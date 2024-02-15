import { DateTimeRangeControlProps } from './DateTimeRangeControl';
import { RealTimeButtonProps } from '../RealTimeButton';

export const REAL_TIME_SIZE_MAP: {
  [key in DateTimeRangeControlProps['size']]: RealTimeButtonProps['size'];
} = {
  sm: 'xxs',
  md: 'xs',
  lg: 'sm',
};
