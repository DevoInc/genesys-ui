export const getLastPage = (totalItems, pageSize) =>
  Math.floor(((totalItems || 1) - 1) / pageSize);