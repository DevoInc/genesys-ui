import * as React from 'react';

import type {
  FieldAriaProps,
  GlobalAriaProps,
  TFieldSize,
  TFieldStatus,
} from '../../declarations';
import type { IField, TFieldDirection, TLabelPosition } from './declarations';

export interface FieldContextProps {
  ariaErrorMessage?: FieldAriaProps['aria-errormessage'];
  ariaDescribedBy?: GlobalAriaProps['aria-describedby'];
  ariaLabelledBy?: GlobalAriaProps['aria-labelledby'];
  direction?: TFieldDirection;
  disabled?: IField['disabled'];
  hasWideControl?: boolean;
  id?: IField['id'];
  labelPosition?: TLabelPosition;
  required?: IField['required'];
  size?: TFieldSize;
  status?: TFieldStatus;
}

export const FieldContext = React.createContext<FieldContextProps>({
  direction: 'column',
  hasWideControl: true,
  labelPosition: 'top',
  size: 'md',
  status: 'base',
});
