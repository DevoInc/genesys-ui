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
