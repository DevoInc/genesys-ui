export const STEPPER_BADGE_COLOR_MAP = {
  completed: 'success',
  current: 'secondary',
  pending: 'neutral',
  disabled: 'neutral',
} as const;

export const LABEL_COLOR = {
  completed: 'base',
  current: 'stronger',
  pending: 'base',
  disabled: 'weakest',
} as const;

export const HIDDEN_TEXT = {
  completed: 'Completed: ',
  current: 'Current: ',
  pending: 'Pending: ',
  disabled: 'Disabled: ',
} as const;
