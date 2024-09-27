import * as React from 'react';
import { type MultiValueProps as RSMultiValueProps } from 'react-select';

import type { TSelectOption } from '../../declarations';
import { getValueIconSize } from '../../utils';
import { ValueIcon } from '../ValueIcon';

export interface MultiValueLabelProps<Option>
  extends RSMultiValueProps<Option> {}

export const MultiValueLabel = <Option extends TSelectOption>({
  data,
  selectProps,
}: MultiValueLabelProps<Option>): React.ReactElement<
  MultiValueLabelProps<Option>
> => {
  return (
    <>
      {data.prependContent}
      {data.icon && (
        <ValueIcon
          iconId={data.icon}
          strong={data.bold}
          size={getValueIconSize({
            size: selectProps.size,
            chipSize: selectProps.chipSize,
          })}
        />
      )}
      {data.label}
    </>
  );
};
