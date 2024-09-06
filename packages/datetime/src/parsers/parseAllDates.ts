import { IParseResult } from '../declarations';

export const parseAllDates = (dt: Date | number): IParseResult => ({
  isValid: true,
  value: dt,
  errors: [],
});
