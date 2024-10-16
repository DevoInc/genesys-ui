import * as React from 'react';

import type { IPaginationCommonInterface } from '../../declarations';
import { HFlex } from '../../../HFlex';
import { Label } from '../../../Label';
import { SelectControl } from '../../../SelectControl';
import { DEFAULT_TEXTS } from '../../constants';

export interface PaginationRangeProps extends IPaginationCommonInterface {}

export const PaginationRange: React.FC<PaginationRangeProps> = ({
  id,
  size,
  style,
  pageSize,
  pageSizeOptions,
  onPageSizeChange,
  texts,
}) => {
  const { rangeText } = { ...DEFAULT_TEXTS, ...texts };
  return (
    <HFlex spacing="cmp-xxs" style={style} flex="0 0 auto">
      <SelectControl
        id={id ? `${id}__page-range-selector` : null}
        noOptionsMessage={() => ''}
        onChange={(option) => {
          onPageSizeChange(Number(option.value));
        }}
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
