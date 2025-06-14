export type TCalendarI18n = {
  /** Out of range message */
  outOfRange: string;
};

export interface ICellData {
  date: Date;
  /** Timestamp version of the cell date */
  ts: number;
  isDisabled: boolean;
  calendarDay: ICalendarDay;
  label: string;
  isLastDayOfMonth: boolean;
  errors: string[];
}

export interface ICalendarInterval {
  start: Date;
  end: Date;
}

export interface ICalendarDay {
  year: number;
  month: number;
  day: number;
  value: number;
}
