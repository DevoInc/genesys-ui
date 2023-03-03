import * as React from 'react';
import { MultiValueProps } from 'react-select';

import { StyledSelectChipIcon } from '../styled';
import { CustomSelectProps } from '../declarations';
import { getChipContainerSize } from '../utils';

export interface MultiValueLabelProps {
  selectProps: MultiValueProps['selectProps'] & CustomSelectProps;
  data: any;
}

export const MultiValueLabel: React.FC<MultiValueLabelProps> = (props) => {
  return (
    <React.Fragment>
      {props.data.icon && (
        <StyledSelectChipIcon
          hasBoldIcon={props.data.bold}
          size={getChipContainerSize({
            size: props.selectProps.size,
            chipSize: props.selectProps.chipSize,
          })}
        />
      )}
      {props.data.label}
    </React.Fragment>
  );
};
