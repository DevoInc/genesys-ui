import type { TBaseSize, TUIColorScheme } from '../../declarations/commonProps';
import { OmitUnion } from '../../typeFunctions';

export type TFloatingHelperSize = TBaseSize;

export type TFloatingHelperStatus = OmitUnion<TUIColorScheme, 'info'> | 'base';
