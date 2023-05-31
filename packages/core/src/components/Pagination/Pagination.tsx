import * as React from 'react';
import ReactToolTip from 'react-tooltip';

import {
  HFlex,
  Label,
  IconButton,
  InputControl,
  SelectControl,
  Flex,
  Box,
} from '../';
import { usePaginationStyles } from './usePaginationStyles';
import { defaultTexts, HideParts, TextProps } from './declarations';
import { PaginationInfo } from './hooks';
import {
  BaseSize,
  GlobalAriaProps,
  GlobalAttrProps,
  StyledPolymorphicProps,
} from '../../declarations';

const defaultHideParts = {
  infoLabel: false,
  rangeSelector: false,
  firstPageBtn: false,
  prevPageBtn: false,
  nextPageBtn: false,
  lastPageBtn: false,
};

export interface PaginationProps
  extends Pick<GlobalAttrProps, 'id'>,
    Pick<GlobalAriaProps, 'aria-label' | 'aria-describedby'>,
    StyledPolymorphicProps {
  /** Tooltip text of the first last button */
  texts?: TextProps;
  /**
   * If you want to override pagination internal state,
   * use the usePagination hook in the parent and pass the props
   */
  paginationHook?: PaginationInfo;
  hideParts?: HideParts;
  WrapperComponent?: React.ComponentType<any>;
  size?: BaseSize;
}

export const Pagination: React.FC<PaginationProps> = ({
  as = 'nav',
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  hideParts = defaultHideParts,
  id,
  paginationHook,
  size = 'md',
  texts,
  WrapperComponent,
}) => {
  // State
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const {
    page,
    lastPage,
    pageFirstItem,
    pageLastItem,
    totalItems,
    pageSize,
    setPageSize,
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
    infoTextFn,
    lastPageTooltipText,
    nextPageTooltipText,
    pageSelectorLabel,
    prevPageTooltipText,
    rangeText,
    selectPageTooltipTextFn,
  } = React.useMemo(() => ({ ...defaultTexts, ...texts }), [texts]);
  const pageTooltip = selectPageTooltipTextFn({
    currentPage: page + 1,
    lastPage: lastPage + 1,
  });
  const paginationInfoText = React.useMemo(
    () =>
      infoTextFn({
        totalItems,
        pageSize,
        pageFirstItem: pageFirstItem + 1,
        pageLastItem: pageLastItem + 1,
      }),
    [infoTextFn, totalItems, pageSize, pageFirstItem, pageLastItem]
  );
  const pageNavOptions = React.useMemo(
    () =>
      [...new Array(lastPage + 1)].map((_, index) => ({
        value: index,
        label: `${index + 1}`,
      })),
    [lastPage]
  );
  const { actionsSize } = usePaginationStyles({
    pageSizeOptions,
    size,
    lastPage,
  });

  // Functions
  const onChangeRangeSelect = React.useCallback(
    (option) => setPageSize(parseInt(option.value)),
    [setPageSize]
  );
  const onInputChange = React.useCallback(
    () => (ev: Event) =>
      goToPage(parseInt((ev.target as HTMLInputElement)?.value) - 1),
    [goToPage]
  );
  const noOptionsMessage = React.useCallback(() => '', []);
  const onChange = React.useCallback((e) => goToPage(e.value), [goToPage]);
  const onMenuOpen = React.useCallback(() => {
    ReactToolTip.hide();
    setMenuOpen(true);
  }, []);
  const onMenuClose = React.useCallback(() => setMenuOpen(false), []);
  const WrapperComponentEval = WrapperComponent || Box;

  return (
    <WrapperComponentEval
      as={WrapperComponent ? null : as}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      id={id}
    >
      <HFlex as="ul" spacing={`cmp-${size}`}>
        {/* PAGINATION INFO */}
        {!hideParts?.infoLabel && (
          <Flex.Item as="li">
            <Label size={size}>{paginationInfoText}</Label>
          </Flex.Item>
        )}

        {/* PAGINATION RANGE */}
        {!hideParts?.rangeSelector && (
          <Flex.Item as="li">
            <HFlex spacing="cmp-xxs">
              <Flex.Item>
                <SelectControl
                  id={id ? `${id}-page-range-selector` : null}
                  noOptionsMessage={noOptionsMessage}
                  onChange={onChangeRangeSelect}
                  options={pageSizeOptions.map((item) => ({
                    value: String(item),
                    label: String(item),
                  }))}
                  size={size}
                  value={{ value: pageSize, label: String(pageSize) }}
                />
              </Flex.Item>
              <Flex.Item>
                <Label size={size}>{rangeText}</Label>
              </Flex.Item>
            </HFlex>
          </Flex.Item>
        )}

        {/* PAGINATION NAV */}
        <Flex.Item as="li">
          <HFlex
            as="ul"
            id={id ? `${id}-page-navigation` : null}
            spacing={size === 'lg' ? 'cmp-sm' : 'cmp-xs'}
          >
            {!hideParts?.firstPageBtn && (
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
            {!hideParts?.prevPageBtn && (
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
            {!hideParts?.nextPageBtn && (
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
            {!hideParts?.lastPageBtn && (
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
        </Flex.Item>
      </HFlex>
    </WrapperComponentEval>
  );
};
