import * as React from 'react';

import { defaultTexts, type PaginationCommonInterface } from '../declarations';
import { HFlex } from '../../HFlex';
import { Label } from '../../Label';
import { SelectControl } from '../../SelectControl';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PaginationRangeProps extends PaginationCommonInterface {}

export const PaginationRange: React.FC<PaginationRangeProps> = ({
  id,
  paginationHook,
  size = 'md',
  styles,
  texts,
}) => {
  // State
  const { pageSize, setPageSize, pageSizeOptions } = React.useMemo(
    () => paginationHook,
    [paginationHook],
  );

  // Constants
  const { rangeText } = React.useMemo(
    () => ({ ...defaultTexts, ...texts }),
    [texts],
  );

  const onChangeRangeSelect = React.useCallback(
    (option) => setPageSize(parseInt(option.value, 10)),
    [setPageSize],
  );
  const noOptionsMessage = React.useCallback(() => '', []);

  return (
    <HFlex spacing="cmp-xxs" styles={styles}>
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
      <Label size={size}>{rangeText}</Label>
    </HFlex>
  );
};
