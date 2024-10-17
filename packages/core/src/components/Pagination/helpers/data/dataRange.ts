export const dataRangePagination = (list: unknown[], page: number, pageSize: number) => {
  return list?.slice(page * pageSize, page * pageSize + pageSize - 1 + 1);
};
