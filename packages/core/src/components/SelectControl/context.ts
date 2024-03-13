import * as React from 'react';
import { Props } from 'react-select';
import { ICommonSelectCmps, TSelectOption } from './declarations';

export interface SelectControlContextProps<TSelectOption> {
  size?: ICommonSelectCmps['size'];
  values?: TSelectOption[];
  options?: Props['options'];
}

export const SelectControlContext = React.createContext<
  SelectControlContextProps<TSelectOption>
>({});
