import * as React from 'react';

import { FieldSize, FieldStatus } from '../../declarations';
import { LabelPosition } from './declarations';

export interface FieldContextProps {
  direction?: 'between' | 'row' | 'column' | 'reverse';
  hasWideControl?: boolean;
  labelPosition?: LabelPosition;
  size?: FieldSize;
  status?: FieldStatus;
}

export const FieldContext = React.createContext<FieldContextProps>({
  direction: 'column',
  hasWideControl: true,
  labelPosition: 'top',
  size: 'md',
  status: 'base',
});
