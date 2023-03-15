import { BaseSize } from '../../declarations';

export const CUSTOM_HEIGHT: { [key in BaseSize]: number } = {
  sm: 27,
  md: 32,
  lg: 38,
} as const;
