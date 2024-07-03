export type TConditionFunction = (params: {
  ts: number;
  from: number;
  to: number;
  hover: number;
  hasLeftHoverEffect?: boolean;
  hasRightHoverEffect?: boolean;
}) => boolean;

export type TDayProperties = {
  ts: number;
  monthDay: number;
  isValid: boolean;
  errors: string[];
  isDisabled: boolean;
  isSelected: boolean;
  isFrom: boolean;
  isTo: boolean;
  isLastDayOfMonth: boolean;
  isInsideSelection: boolean;
  isBoxShadowRight: boolean;
  isBoxShadowLeft: boolean;
  isNextBoxShadow: boolean;
  isPrevBoxShadow: boolean;
  isRightHover: boolean;
};

export type TCalendarI18n = {
  /** Out of range message */
  outOfRange: string;
};
