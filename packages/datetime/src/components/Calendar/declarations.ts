export type TConditionFunction = (params: {
  ts: number;
  from: number;
  to: number;
  hover: number;
  hasLeftHoverEffect?: boolean;
  hasRightHoverEffect?: boolean;
}) => boolean;

export type TCalendarI18n = {
  /** Out of range message */
  outOfRange: string;
};
