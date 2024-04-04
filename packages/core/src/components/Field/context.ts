import * as React from 'react';

import type {
  IFieldAriaAttrs,
  IGlobalAriaAttrs,
  TFieldSize,
  TFieldStatus,
} from '../../declarations';
import type {
  IField,
  TFieldDirection,
  TTagGroupLabelPosition,
} from './declarations';

export interface FieldContextProps {
  ariaErrorMessage?: IFieldAriaAttrs['aria-errormessage'];
  ariaDescribedBy?: IGlobalAriaAttrs['aria-describedby'];
  ariaLabelledBy?: IGlobalAriaAttrs['aria-labelledby'];
  direction?: TFieldDirection;
  disabled?: IField['disabled'];
  hasWideControl?: boolean;
  id?: IField['id'];
  labelPosition?: TTagGroupLabelPosition;
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
