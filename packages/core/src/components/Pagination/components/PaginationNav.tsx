import * as React from 'react';

import { defaultTexts, PaginationCommonInterface } from '../declarations';

import { usePaginationStyles } from '../usePaginationStyles';

import { HFlex, IconButton, InputControl, SelectControl, Flex } from '../..';

export interface PaginationNavProps extends PaginationCommonInterface {
  hideFirstPageBtn?: boolean;
  hidePrevPageBtn?: boolean;
  hideNextPageBtn?: boolean;
  hideLastPageBtn?: boolean;
}

export const PaginationNav: React.FC<PaginationNavProps> = ({
  hideFirstPageBtn,
  hideLastPageBtn,
  hideNextPageBtn,
  hidePrevPageBtn,
  id,
  paginationHook,
  size = 'md',
  styles,
  texts,
}) => {
  // State
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const {
    page,
    lastPage,
    goToFirstPage,
    goToLastPage,
    goToNextPage,
    goToPage,
    goToPreviousPage,
    pageSizeOptions,
  } = React.useMemo(() => paginationHook, [paginationHook]);

  // Constants
  const {
    firstPageTooltipText,
    lastPageTooltipText,
    nextPageTooltipText,
    pageSelectorLabel,
    prevPageTooltipText,
    selectPageTooltipTextFn,
  } = React.useMemo(() => ({ ...defaultTexts, ...texts }), [texts]);

  const pageTooltip = selectPageTooltipTextFn({
    currentPage: page + 1,
    lastPage: lastPage + 1,
  });

  const pageNavOptions = React.useMemo(
    () =>
      [...new Array(lastPage + 1)].map((_, index) => ({
        value: index,
        label: `${index + 1}`,
      })),
    [lastPage],
  );

  const { actionsSize } = usePaginationStyles({
    pageSizeOptions,
    size,
    lastPage,
  });

  // Functions
  const onInputChange = React.useCallback(
    () => (ev: Event) =>
      goToPage(parseInt((ev.target as HTMLInputElement)?.value) - 1),
    [goToPage],
  );
  const noOptionsMessage = React.useCallback(() => '', []);
  const onChange = React.useCallback((e) => goToPage(e.value), [goToPage]);
  const onMenuOpen = React.useCallback(() => {
    setMenuOpen(true);
  }, []);
  const onMenuClose = React.useCallback(() => setMenuOpen(false), []);

  return (
    <HFlex
      as="ul"
      id={id ? `${id}-page-navigation` : null}
      spacing={size === 'lg' ? 'cmp-sm' : 'cmp-xs'}
      styles={styles}
    >
      {!hideFirstPageBtn && (
        <Flex.Item as="li">
          <IconButton
            hasBoldIcon
            icon="gi-arrow_double_left"
            onClick={goToFirstPage}
            size={actionsSize}
            state={page === 0 ? 'disabled' : 'enabled'}
            tooltip={firstPageTooltipText}
          />
        </Flex.Item>
      )}
      {!hidePrevPageBtn && (
        <Flex.Item as="li">
          <IconButton
            hasBoldIcon
            icon="gi-arrow_left"
            onClick={goToPreviousPage}
            size={actionsSize}
            state={page === 0 ? 'disabled' : 'enabled'}
            tooltip={prevPageTooltipText}
          />
        </Flex.Item>
      )}
      {lastPage > 9 ? (
        <Flex.Item as="li">
          <InputControl
            aria-label={pageSelectorLabel}
            data-tip={pageTooltip}
            id={id ? `${id}-page-selector` : null}
            max={String(lastPage + 1)}
            min={'1'}
            onChange={onInputChange}
            size={size}
            type="number"
            value={String(page + 1)}
          />
        </Flex.Item>
      ) : (
        <Flex.Item as="li">
          <SelectControl
            aria-label={pageSelectorLabel}
            data-tip={isMenuOpen ? '' : pageTooltip}
            isDisabled={lastPage === 0}
            id={id ? `${id}-page-selector` : null}
            noOptionsMessage={noOptionsMessage}
            onChange={onChange}
            onMenuClose={onMenuClose}
            onMenuOpen={onMenuOpen}
            options={pageNavOptions}
            size={size}
            value={{ value: page, label: String(page + 1) }}
          />
        </Flex.Item>
      )}
      {!hideNextPageBtn && (
        <Flex.Item as="li">
          <IconButton
            aria-label={nextPageTooltipText}
            hasBoldIcon
            icon="gi-arrow_right"
            onClick={goToNextPage}
            size={actionsSize}
            state={page === lastPage ? 'disabled' : 'enabled'}
            tooltip={nextPageTooltipText}
          />
        </Flex.Item>
      )}
      {!hideLastPageBtn && (
        <Flex.Item as="li">
          <IconButton
            aria-label={lastPageTooltipText}
            hasBoldIcon
            icon="gi-arrow_double_right"
            onClick={goToLastPage}
            size={actionsSize}
            state={page === lastPage ? 'disabled' : 'enabled'}
            tooltip={lastPageTooltipText}
          />
        </Flex.Item>
      )}
    </HFlex>
  );
};
