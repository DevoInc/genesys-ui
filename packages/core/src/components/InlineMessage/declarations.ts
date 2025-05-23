import type { TUIColorScheme } from '../../declarations';
import type { IPanelContainerAttrs } from '../Panel/declarations';
import { OmitUnion } from '../../typeFunctions/omitUnion';

export type TInlineMessageColorScheme =
  | OmitUnion<TUIColorScheme, 'info'>
  | 'base';
export type TInlineMessageSize = IPanelContainerAttrs['size'];
