export interface HookCommonReturnParams {
  selectedDates: { from: number; to: number };
  hasLeftHoverEffect: boolean;
  hasRightHoverEffect: boolean;
  handleDateChange: (ts: number) => void;
}
