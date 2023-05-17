import * as React from 'react';
import { GroupBase, Props } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { CommonSelectCmpsProps, SelectOption } from './declarations';
import { StyledSelectControl } from './styled/StyledSelectControl';
import { GlobalAttrProps } from '../../declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InnerSelectControlProps<
  Option = SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
  // React-select requires a concrete theme schema which is not compatible with ours.
> extends Omit<Props<Option, IsMulti, Group>, 'theme'>,
    CommonSelectCmpsProps {}

export const InnerSelectControl = <
  Option extends SelectOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: InnerSelectControlProps<Option, IsMulti, Group>
): React.ReactElement => {
  return props.creatable ? (
    <StyledSelectControl
      as={CreatableSelect<Option, IsMulti, Group>}
      tooltip={props.tooltip}
      {...props}
    />
  ) : (
    <StyledSelectControl {...props} tooltip={props.tooltip} />
  );
};
