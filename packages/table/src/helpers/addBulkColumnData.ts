import { TRow } from '../declarations';

export const addBulkColumnData = (data: TRow[]) => {
  return data.map((d) => {
    d.bulk = false;
    return d;
  });
};
