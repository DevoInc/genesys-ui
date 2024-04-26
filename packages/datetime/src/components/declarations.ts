export type TDateRange = {
  from: number;
  to: number;
};

export type TDateRangeExtended = {
  from: number | string;
  to: number | string;
};

export type TDateApplyValue = {
  timestamp: TDateRange;
  preset: TDateRangeExtended;
};

export type TDatetime = number | Date;

export interface ITime {
  /** If hasTime, allow to show the milliseconds. */
  hasMillis?: boolean;
  /** If hasTime, allow to show the seconds. */
  hasSeconds?: boolean;
  /**  Show the time input HTML element. */
  hasTime?: boolean;
  /** The latest day to accept. One of `number` or `Date`. */
  maxDate?: TDatetime;
  /** The earliest day to accept. One of `number` or `Date`. */
  minDate?: TDatetime;
}
