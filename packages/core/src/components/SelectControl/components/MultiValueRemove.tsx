import * as React from 'react';
import {
  components,
  MultiValueRemoveProps as RSMultiValueRemoveProps,
} from 'react-select';
import { SelectOption } from '../declarations';

import { IconButtonRemove } from '../..';
import { getChipSize } from '../utils';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MultiValueRemoveProps<Option>
  extends RSMultiValueRemoveProps<Option> {}

export const MultiValueRemove = <Option extends SelectOption>(
  props: MultiValueRemoveProps<Option>
): React.ReactElement<MultiValueRemoveProps<Option>> => {
  if (props.data.fixed) return null;

  return (
    <components.MultiValueRemove {...props}>
      <IconButtonRemove
        as="span"
        size={getChipSize({
          size: props.selectProps.size || 'xxs',
          chipSize: props.selectProps.chipSize,
        })}
        title="Remove"
      />
    </components.MultiValueRemove>
  );
};
