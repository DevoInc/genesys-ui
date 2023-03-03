export type DateRange = {
  from: number;
  to: number;
};

export type DateRangeExtended = {
  from: number | string;
  to: number | string;
};

export type ApplyValue = {
  timestamp: DateRange;
  preset: DateRangeExtended;
};

export type Datetime = number | Date;
