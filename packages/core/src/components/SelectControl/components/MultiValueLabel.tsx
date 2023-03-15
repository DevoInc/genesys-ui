import * as React from 'react';
import { MultiValueProps } from 'react-select';

import { StyledSelectChipIcon } from '../styled';
import { CommonSelectCmpsProps } from '../declarations';
import { getChipContainerSize } from '../utils';

export interface MultiValueLabelProps {
  selectProps: MultiValueProps['selectProps'] & CommonSelectCmpsProps;
  data: any;
}

export const MultiValueLabel: React.FC<MultiValueLabelProps> = ({
  data,
  selectProps,
}) => {
  return (
    <React.Fragment>
      {data.icon && (
        <StyledSelectChipIcon
          hasBoldIcon={data.bold}
          size={getChipContainerSize({
            size: selectProps.size,
            chipSize: selectProps.chipSize,
          })}
        />
      )}
      {data.label}
    </React.Fragment>
  );
};
