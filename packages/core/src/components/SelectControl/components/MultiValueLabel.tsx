import * as React from 'react';
import { MultiValueProps as RSMultiValueProps } from 'react-select';
import { SelectOption } from '../declarations';

import { getChipSize } from '../utils';

import { Chip } from '../../Chip';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MultiValueProps<Option> extends RSMultiValueProps<Option> {}

export const MultiValueLabel = <Option extends SelectOption>({
  data,
  selectProps,
}: MultiValueProps<Option>): React.ReactElement<MultiValueProps<Option>> => {
  return (
    <>
      {data.icon && (
        <Chip._Icon
          iconId={data.icon}
          strong={data.bold}
          size={getChipSize({
            size: selectProps.size || 'xs',
            chipSize: selectProps.chipSize,
          })}
        />
      )}
      {data.label}
    </>
  );
};
