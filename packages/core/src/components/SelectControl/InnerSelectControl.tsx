import * as React from 'react';
import { GroupBase, Props } from 'react-select';
import CreatableSelect from 'react-select/creatable';

import { ICommonSelectCmps, TSelectOption } from './declarations';
import { StyledOverloadCssProps } from '../../declarations';

import { StyledSelectControl } from './styled';

export interface InnerSelectControlProps<
  Option = TSelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
  // React-select requires a concrete theme schema which is not compatible with ours.
> extends Omit<Props<Option, IsMulti, Group>, 'theme' | 'styles'>,
    ICommonSelectCmps,
    StyledOverloadCssProps {
  componentStyles?: Props<Option, IsMulti, Group>['styles'];
}

export const InnerSelectControl = <
  Option extends TSelectOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
>({
  styles,
  componentStyles,
  ...props
}: InnerSelectControlProps<Option, IsMulti, Group>): React.ReactElement => {
  return props.creatable ? (
    <StyledSelectControl
      as={CreatableSelect<Option, IsMulti, Group>}
      css={styles}
      tooltip={props.tooltip}
      styles={componentStyles}
      {...props}
    />
  ) : (
    <StyledSelectControl
      {...props}
      css={styles}
      styles={componentStyles}
      tooltip={props.tooltip}
    />
  );
};
