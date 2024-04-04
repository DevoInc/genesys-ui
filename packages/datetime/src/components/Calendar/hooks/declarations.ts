export interface IHookCommonReturnParams {
  selectedDates: { from: number; to: number };
  hasLeftHoverEffect: boolean;
  hasRightHoverEffect: boolean;
  handleDateChange: (ts: number) => void;
}
