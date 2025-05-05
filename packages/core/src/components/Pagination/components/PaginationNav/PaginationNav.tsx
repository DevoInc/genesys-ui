import * as React from 'react';

import type { IPaginationCommonInterface } from '../../declarations';
import { DEFAULT_TEXTS } from '../../constants';
import {
  clamp,
  getLastPage,
  goToLastPageFn,
  goToNextPageFn,
  goToPreviousPageFn,
} from '../../helpers';
import { PaginationContext } from '../../context';
import {
  GIAngleDoubleLeft,
  GIAngleDoubleRight,
  GIAngleLeft,
  GIAngleRight,
} from '@devoinc/genesys-icons';
import { HFlex } from '../../../HFlex';
import { IconButton } from '../../../IconButton';
import { SelectControl, type TSelectOption } from '../../../SelectControl';
import { Flex } from '../../../Flex';
import { Box } from '../../../Box';

export interface PaginationNavProps
  extends Pick<
    IPaginationCommonInterface,
    | 'id'
    | 'goToFirstPage'
    | 'goToLastPage'
    | 'goToNextPage'
    | 'goToPreviousPage'
    | 'page'
    | 'pageSize'
    | 'pageSizeOptions'
    | 'onChange'
    | 'onPageSizeChange'
    | 'size'
    | 'style'
    | 'totalItems'
    | 'texts'
  > {
  hideFirstLastButtons?: boolean;
  hidePrevNextButtons?: boolean;
  hidePageSelector?: boolean;
}

export const PaginationNav: React.FC<PaginationNavProps> = ({
  hideFirstLastButtons,
  hidePageSelector,
  hidePrevNextButtons,
  id,
  size = 'md',
  style,
  goToFirstPage = () => 0,
  goToLastPage = goToLastPageFn,
  goToNextPage = goToNextPageFn,
  goToPreviousPage = goToPreviousPageFn,
  page,
  texts,
  totalItems,
  pageSize,
  onChange,
  ...dataProps
}) => {
  const context = React.useContext(PaginationContext);
  const evalSize = size || context.size;
  const evalTexts = texts || context.texts;

  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const lastPage = getLastPage(totalItems, pageSize);

  const {
    firstPageTooltipText,
    lastPageTooltipText,
    nextPageTooltipText,
    pageSelectorLabel,
    prevPageTooltipText,
    selectPageTooltipTextFn,
  } = { ...DEFAULT_TEXTS, ...evalTexts };

  return (
    <Box as="nav" {...dataProps}>
      <HFlex
        as="ul"
        id={id ? `${id}__page-navigation` : null}
        spacing={evalSize === 'lg' ? 'cmp-sm' : 'cmp-xs'}
        style={style}
      >
        {!hideFirstLastButtons && (
          <Flex.Item as="li">
            <IconButton
              hasBoldIcon
              icon={<GIAngleDoubleLeft />}
              onClick={() => {
                onChange(goToFirstPage({ totalItems, pageSize, page }));
              }}
              size={evalSize}
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
              onClick={() => {
                onChange(goToPreviousPage({ totalItems, pageSize, page }));
              }}
              size={evalSize}
              state={page === 0 ? 'disabled' : 'enabled'}
              tooltip={prevPageTooltipText}
            />
          </Flex.Item>
        )}
        {!hidePageSelector && (
          <Flex.Item as="li" flex="0 0 auto" minWidth="4.8rem">
            <SelectControl
              aria-label={pageSelectorLabel}
              tooltip={
                isMenuOpen
                  ? ''
                  : selectPageTooltipTextFn({ page, pageSize, totalItems })
              }
              isDisabled={lastPage === 0}
              id={id ? `${id}-page-selector` : null}
              noOptionsMessage={() => ''}
              onChange={(e: TSelectOption) => {
                onChange(clamp(lastPage, e.value as number));
              }}
              onMenuClose={() => setMenuOpen(false)}
              onMenuOpen={() => {
                setMenuOpen(true);
              }}
              options={Array.from({ length: lastPage + 1 }).map((_, index) => ({
                value: index,
                label: `${index + 1}`,
              }))}
              size={evalSize}
              value={{ value: page, label: String(page + 1) }}
              minMenuWidth="6rem"
            />
          </Flex.Item>
        )}
        {!hidePrevNextButtons && (
          <Flex.Item as="li">
            <IconButton
              aria-label={nextPageTooltipText}
              hasBoldIcon
              icon={<GIAngleRight />}
              onClick={() => {
                onChange(goToNextPage({ totalItems, pageSize, page }));
              }}
              size={evalSize}
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
              onClick={() => {
                onChange(goToLastPage({ totalItems, pageSize, page }));
              }}
              size={evalSize}
              state={page === lastPage ? 'disabled' : 'enabled'}
              tooltip={lastPageTooltipText}
            />
          </Flex.Item>
        )}
      </HFlex>
    </Box>
  );
};
