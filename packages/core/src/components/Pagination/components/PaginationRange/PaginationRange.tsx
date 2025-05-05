import * as React from 'react';

import type { IPaginationCommonInterface } from '../../declarations';
import { DEFAULT_TEXTS } from '../../constants';
import { PaginationContext } from '../../context';
import { HFlex } from '../../../HFlex';
import { Label } from '../../../Label';
import { SelectControl, type TSelectOption } from '../../../SelectControl';

export interface PaginationRangeProps
  extends Pick<
    IPaginationCommonInterface,
    | 'id'
    | 'size'
    | 'style'
    | 'pageSize'
    | 'pageSizeOptions'
    | 'onPageSizeChange'
    | 'texts'
  > {}

export const PaginationRange: React.FC<PaginationRangeProps> = ({
  id,
  size,
  style,
  pageSize,
  pageSizeOptions,
  onPageSizeChange,
  texts,
}) => {
  const context = React.useContext(PaginationContext);
  const evalSize = size || context.size;
  const evalTexts = texts || context.texts;
  const { rangeText } = { ...DEFAULT_TEXTS, ...evalTexts };
  return (
    <HFlex spacing="cmp-xxs" style={style} flex="0 0 auto">
      <SelectControl
        id={id ? `${id}__page-range-selector` : null}
        noOptionsMessage={() => ''}
        onChange={(option: TSelectOption) => {
          onPageSizeChange(Number(option.value));
        }}
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
