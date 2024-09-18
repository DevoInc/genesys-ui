import * as React from 'react';
import { useMount } from 'ahooks';

import type { IPaginationHook } from './declarations';

export const usePagination: IPaginationHook = ({ list, conf }) => {
  const {
    initialPageSize = 10,
    initialPage,
    pageSizeOptions,
  } = conf || {
    initialPageSize: 10,
  };
  const isHookActive = Boolean(conf);
  const [isMounted, setIsMounted] = React.useState(false);
  const [page, setPage] = React.useState(initialPage || 0);
  const [pageSize, setPageSize] = React.useState(initialPageSize || 10);
  const [pageData, setPageData] = React.useState(list.slice(0, pageSize));

  useMount(() => {
    setIsMounted(true);
  });

  const lastPage = React.useMemo(
    () => Math.floor(((list.length || 1) - 1) / pageSize),
    [list.length, pageSize],
  );
  const pageFirstItem = React.useMemo(() => page * pageSize, [page, pageSize]);
  const pageLastItem = React.useMemo(
    () => (page === lastPage ? list.length - 1 : pageFirstItem + pageSize - 1),
    [page, lastPage, pageFirstItem, pageSize, list.length],
  );
  const totalItems = React.useMemo(() => list.length, [list.length]);

  /**
   * Sets the page to the given value, then updates de pageData
   */
  const goToPage = React.useCallback(
    (pageNumber: number) => {
      if (pageNumber !== page) {
        pageNumber = Math.min(Math.max(0, pageNumber), lastPage); // Restrict page number to range
        setPage(pageNumber);
      }
    },
    [page, lastPage],
  );
  const goToNextPage = React.useCallback(() => setPage(page + 1), [page]);
  const goToPreviousPage = React.useCallback(() => setPage(page - 1), [page]);
  const goToFirstPage = React.useCallback(() => setPage(0), []);
  const goToLastPage = React.useCallback(() => setPage(lastPage), [lastPage]);

  const updatePageSize = React.useCallback(
    (newPageSize: number) => {
      const newPage = Math.floor(pageFirstItem / newPageSize);
      setPage(newPage);
      setPageSize(newPageSize);
    },
    [pageFirstItem],
  );

  /**
   *  Whenever procesedData, page or pageSize changes, updates
   *  the pageData.
   *
   *  This effect can be disabled to avoid rerenders if pagination,
   * is not going to be used;
   */
  const updatePageDataOrResetPage = () => {
    if (isMounted && isHookActive) {
      const newPageData = list.slice(pageFirstItem, pageLastItem + 1);
      if (newPageData.length === 0 && page !== 0) {
        setPage(0);
      } else {
        setPageData(newPageData);
      }
    }
  };

  React.useEffect(updatePageDataOrResetPage, [
    list,
    page,
    pageFirstItem,
    pageLastItem,
    isMounted,
    isHookActive,
  ]);

  return {
    page,
    lastPage,
    pageFirstItem,
    pageLastItem,
    totalItems,
    pageData,
    pageSize,
    pageSizeOptions: pageSizeOptions || [5, 10, 15, 20],
    setPageSize: updatePageSize,
    goToNextPage,
    goToPreviousPage,
    goToFirstPage,
    goToLastPage,
    goToPage,
  };
};
