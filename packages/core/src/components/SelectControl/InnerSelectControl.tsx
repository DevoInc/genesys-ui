import * as React from 'react';
import { GroupBase } from 'react-select';
import CreatableSelect, { CreatableProps } from 'react-select/creatable';
import { CommonSelectCmpsProps, SelectOption } from './declarations';
import {
  StyledSelectControl,
  StyledSelectControlProps,
} from './styled/StyledSelectControl';

// React-select requires a concrete theme schema which is not compatible with ours.
export interface InnerSelectControlProps
  extends Omit<StyledSelectControlProps, 'theme'>,
    Omit<
      CreatableProps<SelectOption, boolean, GroupBase<SelectOption>>,
      'theme'
    >,
    CommonSelectCmpsProps {}

export const InnerSelectControl: React.FC<InnerSelectControlProps> = (
  props
) => {
  return props.creatable ? (
    <StyledSelectControl as={CreatableSelect} {...props} />
  ) : (
    <StyledSelectControl {...props} />
  );
};
