import { ButtonBasicState } from '../Button';
import { LinkState } from '../Link/declarations';
import { TTabsItemState } from './declarations';

type StateMap<T> = { [key in TTabsItemState]: T };

const stateMap = {
  enabled: 'enabled',
  selected: 'enabled',
  disabled: 'disabled',
} as const;

export const linkStateMap: StateMap<LinkState> = stateMap;
export const buttonStateMap: StateMap<ButtonBasicState> = stateMap;
