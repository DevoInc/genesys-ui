import * as React from 'react';
import { Props } from 'react-select';
import { CommonSelectCmpsProps, SelectOption } from './declarations';

export interface SelectControlContextProps<SelectOption> {
  size?: CommonSelectCmpsProps['size'];
  values?: SelectOption[];
  options?: Props['options'];
}

export const SelectControlContext = React.createContext<
  SelectControlContextProps<SelectOption>
>({});
