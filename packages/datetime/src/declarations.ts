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

export interface IParseResult {
  isValid: boolean;
  value: number | Date;
  errors: string[];
}

export type TDate = number | string | Date;
export type TDateRange = TDate[];

export type TCalendarDate = number | Date;
export type TCalendarDateRange = TCalendarDate[];

export type TParseDate = (date: TDate) => IParseResult;
