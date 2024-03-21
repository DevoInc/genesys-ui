import * as React from 'react';
import { DefaultTheme } from 'styled-components';

import type {
  TFieldSize,
  TGlobalState,
  TGlobalStatus,
} from '../../declarations';
import type { FieldContextProps } from './context';
import { typoMixin, getTypoObject } from '../../styled/mixins/typography';
import type { IField } from './declarations';

export const getFieldControlTypo = ({
  textAlign,
  theme,
  size,
}: {
  textAlign?: React.CSSProperties['textAlign'];
  theme: DefaultTheme;
  size?: TFieldSize;
}) =>
  typoMixin({
    textAlign,
    theme,
    size,
  });

export const getFieldState = ({
  readOnly,
  state,
}: {
  readOnly?: boolean;
  state?: TGlobalState;
}): TGlobalState => {
  if (state) return state;
  if (readOnly) return 'readonly';
  return 'enabled';
};

export const getFieldControlTypoObj = ({
  theme,
  size,
}: {
  theme: DefaultTheme;
  size?: TFieldSize;
}) => getTypoObject({ theme, size: size });

export const getTFieldStatus = (status: TGlobalStatus = 'base') => {
  if (status === 'help') return 'base';
  return status;
};

interface IGetFieldContextProps {
  ariaDescribedBy?: FieldContextProps['ariaDescribedBy'];
  ariaErrorMessage?: FieldContextProps['ariaErrorMessage'];
  ariaLabelledBy?: FieldContextProps['ariaLabelledBy'];
  context?: FieldContextProps;
  disabled?: IField['disabled'];
  id?: FieldContextProps['id'];
  required?: IField['required'];
  size?: FieldContextProps['size'];
  status?: FieldContextProps['status'];
}
/**
 * Get the evaluated props based in the Field context for its children (usually a field control: InputControl, CheckboxControl... etc.)
 *
 * @return Evaluated props object
 */
export const getFieldContextProps = ({
  ariaDescribedBy,
  ariaErrorMessage,
  ariaLabelledBy,
  context,
  disabled,
  id,
  required,
  size,
  status,
}: IGetFieldContextProps) => ({
  ariaDescribedBy: ariaDescribedBy || context?.ariaDescribedBy,
  ariaErrorMessage: ariaErrorMessage || context?.ariaErrorMessage,
  ariaLabelledBy: ariaLabelledBy || context?.ariaLabelledBy,
  disabled: disabled || context?.disabled,
  id: id || context?.id,
  required: required || context?.required,
  size: size || context?.size,
  status: status || context?.status,
});
