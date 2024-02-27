import iconDictionary from '@devoinc/genesys-icons/dist/icon-variables.js';
import type { UIColorScheme } from '../../../../declarations/commonProps';
import { STATUS_ICON_MAP } from '../../../../constants';

// ICON BUTTON STATUS - ICON PROP VALUES ------------------------------------ //

export const ICON_BUTTON_STATUS_ICON_PROP_MAP: {
  [key in IconButtonStatusColorScheme]: keyof typeof iconDictionary;
} = STATUS_ICON_MAP.filled;

// ICON BUTTON - COLOR SCHEME - PROP VALUES --------------------------------- //

export type IconButtonStatusColorScheme = UIColorScheme;
