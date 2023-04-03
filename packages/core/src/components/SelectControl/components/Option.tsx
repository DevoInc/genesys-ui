import * as React from 'react';
import { components, OptionProps as RSOptionProps } from 'react-select';

import { Icon } from '../..';
import { SelectOption } from '../declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface OptionProps<Option> extends RSOptionProps<Option> {}

export const Option = <Option extends SelectOption>(
  props: OptionProps<Option>
): React.ReactElement<OptionProps<Option>> => {
  return (
    <components.Option {...props}>
      {props.data.icon && <Icon iconId={props.data.icon} />}
      {props.data.label}
    </components.Option>
  );
};
