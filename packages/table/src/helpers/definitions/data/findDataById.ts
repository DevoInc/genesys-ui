import { TData } from '../../../declarations';

export const findDataById = (data: TData, id: string) =>
  data?.find((d) => d.id === id);

