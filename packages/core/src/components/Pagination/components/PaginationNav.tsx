import * as React from 'react';

import { DEFAULT_TEXTS } from '../constants';
import type { IPaginationCommonInterface } from '../declarations';
import { usePaginationStyles } from '../usePaginationStyles';
import { PaginationContext } from '../context';

import {
  GIAngleDoubleLeft,
  GIAngleDoubleRight,
  GIAngleLeft,
  GIAngleRight,
} from '@devoinc/genesys-icons';
import { HFlex } from '../../HFlex';
import { IconButton } from '../../IconButton';
import { SelectControl } from '../../SelectControl';
import { Flex } from '../../Flex';
import { Box } from '../../Box';

export interface PaginationNavProps extends IPaginationCommonInterface {
  hideFirstLastButtons?: boolean;
  hidePrevNextButtons?: boolean;
  hidePageSelector?: boolean;
}

export const PaginationNav: React.FC<PaginationNavProps> = ({
  hideFirstLastButtons,
  hidePageSelector,
  hidePrevNextButtons,
  id,
  paginationHook,
  size = 'md',
  styles,
  texts,
}) => {
  const context = React.useContext(PaginationContext);
  const evalSize = size || context.size;
  const evalPaginationHook = paginationHook || context.paginationHook;
  const evalTexts = texts || context.texts;

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
  } = React.useMemo(() => evalPaginationHook, [evalPaginationHook]);

  // Constants
  const {
    firstPageTooltipText,
    lastPageTooltipText,
    nextPageTooltipText,
    pageSelectorLabel,
    prevPageTooltipText,
    selectPageTooltipTextFn,
  } = React.useMemo(() => ({ ...DEFAULT_TEXTS, ...evalTexts }), [evalTexts]);

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
    size: evalSize,
    lastPage,
  });

  // Functions
  const noOptionsMessage = React.useCallback(() => '', []);
  const onChange = React.useCallback((e) => goToPage(e.value), [goToPage]);
  const onMenuOpen = React.useCallback(() => {
    setMenuOpen(true);
  }, []);
  const onMenuClose = React.useCallback(() => setMenuOpen(false), []);

  return (
    <Box as="nav">
      <HFlex
        as="ul"
        id={id ? `${id}__page-navigation` : null}
        spacing={evalSize === 'lg' ? 'cmp-sm' : 'cmp-xs'}
        styles={styles}
      >
        {!hideFirstLastButtons && (
          <Flex.Item as="li">
            <IconButton
              hasBoldIcon
              icon={<GIAngleDoubleLeft />}
              onClick={goToFirstPage}
              size={actionsSize}
              state={page === 0 ? 'disabled' : 'enabled'}
              tooltip={firstPageTooltipText}
            />
          </Flex.Item>
        )}
        {!hidePrevNextButtons && (
          <Flex.Item as="li">
            <IconButton
              hasBoldIcon
              icon={<GIAngleLeft />}
              onClick={goToPreviousPage}
              size={actionsSize}
              state={page === 0 ? 'disabled' : 'enabled'}
              tooltip={prevPageTooltipText}
            />
          </Flex.Item>
        )}
        {!hidePageSelector && (
          <Flex.Item as="li" flex="0 0 auto" minWidth="4.8rem">
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
              size={evalSize}
              value={{ value: page, label: String(page + 1) }}
            />
          </Flex.Item>
        )}
        {!hidePrevNextButtons && (
          <Flex.Item as="li">
            <IconButton
              aria-label={nextPageTooltipText}
              hasBoldIcon
              icon={<GIAngleRight />}
              onClick={goToNextPage}
              size={actionsSize}
              state={page === lastPage ? 'disabled' : 'enabled'}
              tooltip={nextPageTooltipText}
            />
          </Flex.Item>
        )}
        {!hideFirstLastButtons && (
          <Flex.Item as="li">
            <IconButton
              aria-label={lastPageTooltipText}
              hasBoldIcon
              icon={<GIAngleDoubleRight />}
              onClick={goToLastPage}
              size={actionsSize}
              state={page === lastPage ? 'disabled' : 'enabled'}
              tooltip={lastPageTooltipText}
            />
          </Flex.Item>
        )}
      </HFlex>
    </Box>
  );
};
