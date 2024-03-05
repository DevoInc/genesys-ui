import type { TModalWindowSize } from './declarations';

export const MODAL_WINDOW_SIZE_MAP: { [key in TModalWindowSize]: string } = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  fullscreen: 'full',
} as const;
