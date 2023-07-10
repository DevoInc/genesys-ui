import { STATUS_ICON_MAP } from '../../constants';
import { ToastStatus } from './declarations';
import iconDictionary from '@devoinc/genesys-icons/dist/icon-variables.js';

export const toastStatusToIconMap: {
  [key in ToastStatus]: keyof typeof iconDictionary;
} = STATUS_ICON_MAP.filled;

export const TOAST_ELEVATION_LEVEL = 'popOut' as const;
