import { BasicState, ReadonlyState, BaseSize } from '../../';

// FIELD SIZE - PROP VALUES - CONSTANTS ------------------------------------------- //
// Same as in InputControl.
export type FieldSize = BaseSize;

export type LabelPosition = 'top' | 'left' | 'between' | 'right';
export type FieldDirection = 'between' | 'row' | 'column' | 'reverse';

// FIELD STATE - PROP VALUES - CONSTANTS --------------------------------- //
export type FieldState = BasicState | ReadonlyState;

// FIELD ADDON POSITION - PROP VALUES - CONSTANTS --------------------------- //
export type FieldAddonPosition = 'left' | 'right';
