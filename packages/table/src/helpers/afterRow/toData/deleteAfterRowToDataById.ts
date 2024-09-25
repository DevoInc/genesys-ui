import type { TData } from '../../../declarations';

export const deleteAfterRowToDataById = (data: TData, id: string) =>
  data?.filter((d) => d.id !== id);