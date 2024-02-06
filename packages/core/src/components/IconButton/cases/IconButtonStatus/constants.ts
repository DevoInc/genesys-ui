import type { UIColorScheme } from '../../../../';
import { STATUS_ICON_MAP } from '../../../../constants';
import iconDictionary from '@devoinc/genesys-icons/dist/icon-variables.js';

// ICON BUTTON STATUS - ICON PROP VALUES ------------------------------------ //

export const ICON_BUTTON_STATUS_ICON_PROP_MAP: {
  [key in IconButtonStatusColorScheme]: keyof typeof iconDictionary;
} = STATUS_ICON_MAP.filled;

// ICON BUTTON - COLOR SCHEME - PROP VALUES --------------------------------- //

export type IconButtonStatusColorScheme = UIColorScheme;
