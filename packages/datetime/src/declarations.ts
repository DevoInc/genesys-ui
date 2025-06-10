/* Time interface */
export interface ITime {
  /** If hasTime, allow to show the milliseconds. */
  hasMillis?: boolean;
  /** If hasTime, allow to show the seconds. */
  hasSeconds?: boolean;
  /**  Show the time input HTML element. */
  hasTime?: boolean;
  /** The latest day to accept. One of `number` or `Date`. */
  maxDate?: number | Date;
  /** The earliest day to accept. One of `number` or `Date`. */
  minDate?: number | Date;
}

/* Date representation, include string for dates that could be parsed */
export type TDate = number | string | Date;
export type TDateRange = TDate[];

/* Only calendar date format (number or Date) */
export type TCalendarDate = number | Date;
export type TCalendarDateRange = TCalendarDate[];

export interface IParseResult {
  isValid: boolean;
  value: TDate;
  errors: string[];
}

export interface IParseRangeResult {
  isValid: boolean;
  value: TDateRange;
  errors: string[];
}

export type TParseDate = (date: TDate) => IParseResult;
export type TParseCalendarDate = (date: TCalendarDate) => IParseResult;
export type TParseRange = (range: IParseResult[]) => IParseRangeResult;
// TODO: use TFormatDate
export type TReprDate = (date: TDate) => string;
export type TFormatDate = (date: TDate) => string;

export interface IEndPointRangeTime {
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}
