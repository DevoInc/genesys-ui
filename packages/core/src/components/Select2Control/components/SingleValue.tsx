import * as React from 'react';
import {
  components,
  SingleValueProps as DefaultSingleValueProps,
} from 'react-select';

import { Icon } from '../../';

export interface SingleValueProps extends DefaultSingleValueProps {
  data: any;
}

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
