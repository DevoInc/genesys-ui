import type { TButtonBasicState } from '../Button';
import type { TLinkState } from '../Link/declarations';
import type { TTabsItemState } from './declarations';

type StateMap<T> = { [key in TTabsItemState]: T };

const stateMap = {
  enabled: 'enabled',
  selected: 'enabled',
  disabled: 'disabled',
} as const;

export const linkStateMap: StateMap<TLinkState> = stateMap;
export const buttonStateMap: StateMap<TButtonBasicState> = stateMap;
