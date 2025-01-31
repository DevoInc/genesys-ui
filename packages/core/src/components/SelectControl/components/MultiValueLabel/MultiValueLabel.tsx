import * as React from 'react';
import { type MultiValueProps as RSMultiValueProps } from 'react-select';

import type { TSelectOption } from '../../declarations';
import { getValueIconSize } from '../../utils';
import { ValueIcon } from '../ValueIcon';
import { Chip } from '../../../Chip';

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
          strong={data.bold}
          size={getValueIconSize({
            size: selectProps.size,
            chipSize: selectProps.chipSize,
          })}
        >
          {data.icon}
        </ValueIcon>
      )}
      <Chip._Content style={{ flex: '0 0 auto' }}>{data.label}</Chip._Content>
    </>
  );
};
