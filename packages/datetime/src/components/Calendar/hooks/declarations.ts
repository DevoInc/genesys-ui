export interface IHookCommonReturnParams {
  range: (number | Date)[];
  handleNewDate: (dt: number | Date) => void;
  hasLeftHoverEffect: boolean;
  hasRightHoverEffect: boolean;
}
