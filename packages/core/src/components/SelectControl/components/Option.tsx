import * as React from 'react';
import { components, OptionProps as RSOptionProps } from 'react-select';

import { TSelectOption } from '../declarations';

import { CheckboxControl } from '../../CheckboxControl';
import { HFlex } from '../../HFlex';
import { Icon } from '../../Icon';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface OptionProps<Option> extends RSOptionProps<Option> {}

export const Option = <Option extends TSelectOption>(
  props: OptionProps<Option>,
): React.ReactElement<OptionProps<Option>> => {
  return (
    <components.Option {...props}>
      <HFlex spacing="cmp-xs">
        {props.selectProps.multipleSubtle && (
          <CheckboxControl
            onChange={() => true}
            checked={props.isSelected}
            aria-label="Selected option marker"
          />
        )}
        <HFlex spacing="cmp-xxs">
          {props.data.prependContent}
          {props.data.icon && <Icon size="xs">{props.data.icon}</Icon>}
          {props.data.label}
        </HFlex>
      </HFlex>
    </components.Option>
  );
};
