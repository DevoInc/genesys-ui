import { BasicState, ReadonlyState, BaseSize } from '../../';

// FIELD SIZE - PROP VALUES - CONSTANTS ------------------------------------------- //
// Same as in InputControl.
export type FieldSize = BaseSize;

export type LabelPosition = 'top' | 'left' | 'between' | 'right';

// FIELD STATE - PROP VALUES - CONSTANTS --------------------------------- //
export type FieldState = BasicState | ReadonlyState;

// FIELD - FIELD LABEL POSITION & DIRECTION - MAP - CONSTANTS --------------- //
export const FIELD_LABEL_POS_DIRECTION_MAP = {
  BETWEEN: 'between',
  LEFT: 'row',
  TOP: 'column',
  RIGHT: 'Reverse',
} as const;

// FIELD - FLEX CONFIGURATION - MAP - CONSTANTS ----------------------------------- //
export const ROW = {
  GAP: 'cmp-xs',
  FD: 'row',
  AI: 'center',
  JC: 'flex-start',
} as const;

export const REVERSE = {
  GAP: 'cmp-xs',
  FD: 'row-reverse',
  AI: 'flex-start',
  JC: 'flex-end',
} as const;

export const BETWEEN = {
  GAP: 'cmp-xs',
  FD: 'row',
  AI: 'center',
  JC: 'space-between',
} as const;

export const COLUMN = {
  GAP: 'cmp-xxs',
  FD: 'column',
  AI: 'stretch',
  JC: 'flex-start',
} as const;

export const FIELD_FLEX_CONFIG = { ROW, REVERSE, BETWEEN, COLUMN } as const;

// FIELD - FIELD SIZE & HELPER SIZE - MAP - CONSTANTS ----------------------- //
export const FIELD_HELPER_SIZE_MAP = {
  sm: 'xs',
  md: 'sm',
  lg: 'md',
} as const;

// FIELD ADDON POSITION - PROP VALUES - CONSTANTS --------------------------- //
export type FieldAddonPosition = 'left' | 'right';
