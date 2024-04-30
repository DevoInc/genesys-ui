export type TRealtimeState =
  | 'hidden'
  | 'disabled'
  | 'inactive'
  | 'selected'
  | 'activated';

export type TOnChangeRange = {
  from: { value: number | string; str: string };
  to: { value: number | string; str: string };
};
