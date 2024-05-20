import { compareDesc } from 'date-fns';

import { IParseResult } from '../../declarations';

export const parseDateNoFuture = (dt: Date | number): IParseResult => {
  const result = compareDesc(dt, new Date().getTime());
  const isValid = result >= 0;
  return {
    isValid: isValid,
    value: dt,
    errors: isValid ? [] : ['Date is invalid'],
  };
};
