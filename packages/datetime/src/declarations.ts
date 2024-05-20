export type TTimestampRange = {
  from: number;
  to: number;
};

export type TPresetRange = {
  from: string;
  to: string;
};

export type TDateApplyValue = {
  timestamp: TTimestampRange;
  preset: TPresetRange;
};

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

export type TParseDate = (dt: number | Date) => IParseResult;
