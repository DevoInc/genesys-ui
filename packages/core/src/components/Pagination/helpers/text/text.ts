import { getLastPage } from '../pages';

export const infoTextFn = ({
  totalItems,
  pageSize,
  page,
}: {
  totalItems: number;
  pageSize: number;
  page: number;
}) => {
  const pageFirstItem = page * pageSize + 1;
  const pageLastItem =
    page === getLastPage(totalItems, pageSize)
      ? totalItems
      : page * pageSize + pageSize - 1 + 1;

  return pageSize > totalItems
    ? `${totalItems} items`
    : `${pageFirstItem} - ${pageLastItem} of ${totalItems} items`;
};

export const selectPageTooltipTextFn = ({
  page,
  pageSize,
  totalItems,
}: {
  totalItems: number;
  pageSize: number;
  page: number;
}) => `Page ${page + 1} of ${getLastPage(totalItems, pageSize) + 1}`;
