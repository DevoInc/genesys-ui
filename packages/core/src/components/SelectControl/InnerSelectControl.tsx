import * as React from 'react';
import { GroupBase, Props } from 'react-select';
import CreatableSelect from 'react-select/creatable';

import type { ICommonSelectCmps, TSelectOption } from './declarations';
import type { IStyledOverloadCss } from '../../declarations';
import { StyledSelectControl } from './StyledSelectControl';

export interface InnerSelectControlProps<
  Option = TSelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
  // React-select requires a concrete theme schema which is not compatible with ours.
> extends Omit<Props<Option, IsMulti, Group>, 'theme' | 'styles'>,
    ICommonSelectCmps,
    IStyledOverloadCss {
  componentStyles?: Props<Option, IsMulti, Group>['styles'];
}

export const InnerSelectControl = <
  Option extends TSelectOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
>({
  style,
  componentStyles,
  className,
  classNamePrefix,
  tooltip,
  ...props
}: InnerSelectControlProps<Option, IsMulti, Group>): React.ReactElement => (
  <StyledSelectControl
    {...(props.creatable
      ? {
          as: CreatableSelect<Option, IsMulti, Group>,
        }
      : {})}
    css={style}
    tooltip={tooltip}
    styles={componentStyles}
    className={className || 'react-select__container'}
    classNamePrefix={classNamePrefix || 'react-select'}
    {...props}
  />
);
