import * as React from 'react';

import { FieldProps } from './Field';

export interface FieldContextProps {
  direction?: 'between' | 'row' | 'column' | 'reverse';
  hasWideControl?: FieldProps['hasWideControl'];
  labelPosition?: FieldProps['labelPosition'];
  size?: FieldProps['size'];
  status?: FieldProps['status'];
}

export const FieldContext = React.createContext<FieldContextProps>({
  direction: 'column',
  hasWideControl: true,
  labelPosition: 'top',
  size: 'md',
  status: 'base',
});
