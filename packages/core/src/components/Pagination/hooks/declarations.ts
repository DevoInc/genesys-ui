export type IPaginationItem = string | number;

export interface IPaginationInfo {
  readonly page: number;
  readonly lastPage: number;
  readonly pageFirstItem: number;
  readonly pageLastItem: number;
  readonly totalItems: number;
  readonly pageData: IPaginationItem[];
  readonly pageSize: number;
  readonly pageSizeOptions: number[];
  setPageSize: (value: number) => void;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  goToFirstPage: () => void;
  goToLastPage: () => void;
  goToPage: (page: number) => void;
}

interface IUsePaginationParams {
  list: IPaginationItem[];
  conf: {
    initialPageSize: number;
    initialPage?: number;
    pageSizeOptions?: number[];
  };
}

export type IPaginationHook = (params: IUsePaginationParams) => IPaginationInfo;
