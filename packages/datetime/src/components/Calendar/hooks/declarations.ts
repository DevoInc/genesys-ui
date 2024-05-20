export interface IHookCommonReturnParams {
  selectedDates: (number | Date)[];
  hasLeftHoverEffect: boolean;
  hasRightHoverEffect: boolean;
  handleDateChange: (dt: number | Date) => void;
}
