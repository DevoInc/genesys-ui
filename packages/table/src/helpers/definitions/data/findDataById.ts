import { TData } from "packages/table/src/declarations";

export const findDataById = (data: TData, id: string) =>
  data?.find((d) => d.id === id);