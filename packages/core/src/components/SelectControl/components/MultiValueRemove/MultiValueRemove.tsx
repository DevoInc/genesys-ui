import * as React from 'react';
import {
  components,
  MultiValueRemoveProps as RSMultiValueRemoveProps,
} from 'react-select';

import type { TSelectOption } from '../../declarations';
import { getChipSize } from '../../utils';
import { IconButtonRemove } from '../../../IconButton';

export interface MultiValueRemoveProps<Option>
  extends RSMultiValueRemoveProps<Option> {}

export const MultiValueRemove = <Option extends TSelectOption>(
  props: MultiValueRemoveProps<Option>,
): React.ReactElement<MultiValueRemoveProps<Option>> =>
  props.data.fixed || props.selectProps.multipleSubtle ? null : (
    <components.MultiValueRemove {...props}>
      <IconButtonRemove
        as="span"
        size={getChipSize({
          size: props.selectProps.size || 'xxs',
          chipSize: props.selectProps.chipSize,
        })}
        tooltip="Remove"
      />
    </components.MultiValueRemove>
  );
