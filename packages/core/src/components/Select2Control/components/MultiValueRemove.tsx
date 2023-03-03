import * as React from 'react';
import {
  components,
  MultiValueRemoveProps as DefaultMultiValueRemoveProps,
} from 'react-select';

import { IconButtonRemove } from '../../';
import { CustomSelectProps } from '../declarations';
import { getChipRemoveSize } from '../utils';

export interface MultiValueRemoveProps extends DefaultMultiValueRemoveProps {
  data: any;
  selectProps: DefaultMultiValueRemoveProps['selectProps'] & CustomSelectProps;
}

export const MultiValueRemove: React.FC<MultiValueRemoveProps> = (props) => {
  if (props.data.fixed) return null;

  return (
    <components.MultiValueRemove {...props}>
      <IconButtonRemove
        as="span"
        size={getChipRemoveSize({
          size: props.selectProps.size,
          chipSize: props.selectProps.chipSize,
        })}
        title="Remove"
      />
    </components.MultiValueRemove>
  );
};
