export const DEFAULT_TEXTS = {
  firstPageTooltipText: 'First page',
  infoTextFn: ({ totalItems, pageSize, pageFirstItem, pageLastItem }) => {
    return pageSize > totalItems
      ? `${totalItems} items`
      : `${pageFirstItem} - ${pageLastItem} of ${totalItems} items`;
  },
  lastPageTooltipText: 'Last page',
  nextPageTooltipText: 'Next page',
  pageSelectorLabel: 'Page selector',
  prevPageTooltipText: 'Previous page',
  rangeText: 'items per page',
  selectPageTooltipTextFn: ({ currentPage, lastPage }) =>
    `Page ${currentPage} of ${lastPage}`,
};
