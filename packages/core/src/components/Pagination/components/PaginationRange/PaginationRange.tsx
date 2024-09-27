import * as React from 'react';

import { DEFAULT_TEXTS } from '../../constants';
import type { IPaginationCommonInterface } from '../../declarations';
import { PaginationContext } from '../../context';
import { HFlex } from '../../../HFlex';
import { Label } from '../../../Label';
import { SelectControl } from '../../../SelectControl';

export interface PaginationRangeProps extends IPaginationCommonInterface {}

export const PaginationRange: React.FC<PaginationRangeProps> = ({
  id,
  paginationHook,
  size,
  style,
  texts,
}) => {
  const context = React.useContext(PaginationContext);
  const evalSize = size || context.size;
  const evalPaginationHook = paginationHook || context.paginationHook;
  const evalTexts = texts || context.texts;

  // State
  const { pageSize, setPageSize, pageSizeOptions } = React.useMemo(
    () => evalPaginationHook,
    [evalPaginationHook],
  );

  // Constants
  const { rangeText } = React.useMemo(
    () => ({ ...DEFAULT_TEXTS, ...evalTexts }),
    [evalTexts],
  );

  const onChangeRangeSelect = React.useCallback(
    (option) => setPageSize(parseInt(option.value, 10)),
    [setPageSize],
  );
  const noOptionsMessage = React.useCallback(() => '', []);

  return (
    <HFlex spacing="cmp-xxs" style={style} flex="0 0 auto">
      <SelectControl
        id={id ? `${id}__page-range-selector` : null}
        noOptionsMessage={noOptionsMessage}
        onChange={onChangeRangeSelect}
        options={pageSizeOptions.map((item) => ({
          value: String(item),
          label: String(item),
        }))}
        size={evalSize}
        value={{ value: pageSize, label: String(pageSize) }}
      />
      <Label size={evalSize}>{rangeText}</Label>
    </HFlex>
  );
};
