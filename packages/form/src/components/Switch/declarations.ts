export type SwitchStatus = 'base' | 'error' | 'success' | 'warning';

export type SwitchLabelTextAlign = 'left' | 'center' | 'right';

export type SwitchValidationPos = 'left' | 'center' | 'right' | null;

// TODO: This has more values than LabelPosition. LabelPosition used instead
export type SwitchLabelPos =
  | 'left-top'
  | 'left-middle'
  | 'left-bottom'
  | 'right-top'
  | 'right-middle'
  | 'right-bottom'
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | null;

export type SwitchContentPos = 'left' | 'center' | 'right' | 'stretch' | null;

export type SwitchSize = 'sm' | 'md' | 'lg';
