import * as React from 'react';
import {
  components,
  SingleValueProps as RSSingleValueProps,
} from 'react-select';

import { Icon } from '../..';
import { SelectOption } from '../declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SingleValueProps extends RSSingleValueProps<SelectOption> {}

export const SingleValue: React.FC<SingleValueProps> = (props) => {
  return (
    components.SingleValue && (
      <components.SingleValue {...props}>
        {props.data.icon && <Icon iconId={props.data.icon} />}
        {props.data.label}
      </components.SingleValue>
    )
  );
};
