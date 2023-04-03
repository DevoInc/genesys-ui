import * as React from 'react';
import { MultiValueProps as RSMultiValueProps } from 'react-select';
import { SelectOption } from '../declarations';

import { StyledSelectChipIcon } from '../styled';
import { getChipSize } from '../utils';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MultiValueProps<Option> extends RSMultiValueProps<Option> {}

export const MultiValueLabel = <Option extends SelectOption>({
  data,
  selectProps,
}: MultiValueProps<Option>): React.ReactElement<MultiValueProps<Option>> => {
  return (
    <React.Fragment>
      {data.icon && (
        <StyledSelectChipIcon
          hasBoldIcon={data.bold}
          size={getChipSize({
            size: selectProps.size || 'xs',
            chipSize: selectProps.chipSize,
          })}
        />
      )}
      {data.label}
    </React.Fragment>
  );
};
