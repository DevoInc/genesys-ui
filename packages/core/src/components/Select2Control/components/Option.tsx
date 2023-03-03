import * as React from 'react';
import { components, OptionProps as DefaultOptionProps } from 'react-select';

import { Icon } from '../../';

export interface OptionProps extends DefaultOptionProps {
  data: any;
}

export const Option: React.FC<OptionProps> = (props) => {
  return (
    <components.Option {...props}>
      {props.data.icon && <Icon iconId={props.data.icon} />}
      {props.data.label}
    </components.Option>
  );
};
