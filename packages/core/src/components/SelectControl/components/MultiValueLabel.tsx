import * as React from 'react';
import { MultiValueProps as RSMultiValueProps } from 'react-select';

import { TSelectOption } from '../declarations';

import { getValueIconSize } from '../utils';

import { ValueIcon } from './ValueIcon';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
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
