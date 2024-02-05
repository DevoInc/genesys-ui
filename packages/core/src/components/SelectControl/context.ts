import * as React from 'react';
import { SelectOption } from './declarations';
import { SelectControlProps } from './SelectControl';

export interface SelectControlContextProps<SelectOption> {
  size?: SelectControlProps['size'];
  values?: SelectOption[];
  options?: SelectControlProps['options'];
}

export const SelectControlContext = React.createContext<
  SelectControlContextProps<SelectOption>
>({});
