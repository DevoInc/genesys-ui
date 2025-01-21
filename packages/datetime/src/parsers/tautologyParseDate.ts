import type { TParseDate } from '../declarations';

export const tautologyParseDate: TParseDate = (dt) => ({
  isValid: true,
  value: dt,
  errors: [],
});
