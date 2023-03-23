import * as React from 'react';
import {
  components,
  MultiValueRemoveProps as RSMultiValueRemoveProps,
} from 'react-select';

import { IconButtonRemove } from '../..';
import { SelectOption } from '../declarations';
import { getChipSize } from '../utils';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MultiValueRemoveProps
  extends RSMultiValueRemoveProps<SelectOption> {}

export const MultiValueRemove: React.FC<MultiValueRemoveProps> = (props) => {
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
