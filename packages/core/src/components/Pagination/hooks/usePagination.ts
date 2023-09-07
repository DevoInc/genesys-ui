import { useState, useEffect, useMemo, useCallback } from 'react';
import { Item } from '../declarations';
import { useIsMounted } from '../../../hooks/useIsMounted';
export interface PaginationInfo {
  readonly page: number;
  readonly lastPage: number;
  readonly pageFirstItem: number;
  readonly pageLastItem: number;
  readonly totalItems: number;
  readonly pageData: Item[];
  readonly pageSize: number;
  readonly pageSizeOptions: number[];
  setPageSize: (value: number) => void;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  goToFirstPage: () => void;
  goToLastPage: () => void;
  goToPage: (page: number) => void;
}

interface UsePaginationParams {
  list: Item[];
  conf: {
    initialPageSize: number;
    initialPage?: number;
    pageSizeOptions?: number[];
  };
}

export type PaginationHook = (params: UsePaginationParams) => PaginationInfo;

export const usePagination: PaginationHook = ({ list, conf }) => {
  const {
    initialPageSize = 10,
    initialPage,
    pageSizeOptions,
  } = conf || {
    initialPageSize: 10,
  };
  const isHookActive = Boolean(conf);
  const { current: isMounted } = useIsMounted();
  const [page, setPage] = useState(initialPage || 0);
  const [pageSize, setPageSize] = useState(initialPageSize || 10);
  const [pageData, setPageData] = useState(list.slice(0, pageSize));

  const lastPage = useMemo(
    () => Math.floor(((list.length || 1) - 1) / pageSize),
    [list.length, pageSize],
  );
  const pageFirstItem = useMemo(() => page * pageSize, [page, pageSize]);
  const pageLastItem = useMemo(
    () => (page === lastPage ? list.length - 1 : pageFirstItem + pageSize - 1),
    [page, lastPage, pageFirstItem, pageSize, list.length],
  );
  const totalItems = useMemo(() => list.length, [list.length]);

  /**
   * Sets the page to the given value, then updates de pageData
   */
  const goToPage = useCallback(
    (pageNumber: number) => {
      if (pageNumber !== page) {
        pageNumber = Math.min(Math.max(0, pageNumber), lastPage); // Restrict page number to range
        setPage(pageNumber);
      }
    },
    [page, lastPage],
  );
  const goToNextPage = useCallback(() => setPage(page + 1), [page]);
  const goToPreviousPage = useCallback(() => setPage(page - 1), [page]);
  const goToFirstPage = useCallback(() => setPage(0), []);
  const goToLastPage = useCallback(() => setPage(lastPage), [lastPage]);

  const updatePageSize = useCallback(
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

  useEffect(updatePageDataOrResetPage, [
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
