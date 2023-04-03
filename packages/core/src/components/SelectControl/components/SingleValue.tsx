import * as React from 'react';
import {
  components,
  SingleValueProps as RSSingleValueProps,
} from 'react-select';

import { Icon } from '../..';
import { SelectOption } from '../declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SingleValueProps<Option> extends RSSingleValueProps<Option> {}

export const SingleValue = <Option extends SelectOption>(
  props: SingleValueProps<Option>
): React.ReactElement<SingleValueProps<Option>> => {
  return (
    components.SingleValue && (
      <components.SingleValue {...props}>
        {props.data.icon && <Icon iconId={props.data.icon} />}
        {props.data.label}
      </components.SingleValue>
    )
  );
};
