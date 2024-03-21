import * as React from 'react';

import type {
  ICheckAriaAttrs,
  ICheckAttrs,
  IFieldControl,
  TFieldSize,
  IInputAttrs,
  IWithRequiredAriaLabelOrAriaLabelledByAttr,
} from '../../declarations';
import { FieldContext } from '../Field/context';
import { getFieldContextProps } from '../Field';
import {
  StyledRadioControl,
  type StyledRadioControlProps,
} from './StyledRadioControl';

interface CommonRadioControlProps
  extends IFieldControl,
    ICheckAttrs,
    ICheckAriaAttrs,
    Pick<IInputAttrs, 'value'>,
    Omit<StyledRadioControlProps, '$size'> {
  /** The size for the radio. It affects to its width, height, font-size... etc. */
  size?: TFieldSize;
}

export type RadioControlProps =
  IWithRequiredAriaLabelOrAriaLabelledByAttr<CommonRadioControlProps>;

export const RadioControl: React.FC<RadioControlProps> = ({
  'aria-describedby': ariaDescribedBy,
  'aria-errormessage': ariaErrorMessage,
  'aria-invalid': ariaInvalid,
  'aria-labelledby': ariaLabelledBy,
  checked,
  disabled,
  id,
  onChange,
  required,
  size,
  status,
  styles,
  tooltip,
  ...restNativeProps
}) => {
  const fieldContext = React.useContext(FieldContext);
  const contextBasedProps = getFieldContextProps({
    ariaDescribedBy,
    ariaErrorMessage,
    ariaLabelledBy,
    context: fieldContext,
    disabled,
    id,
    required,
    size,
    status,
  });
  return (
    <StyledRadioControl
      {...restNativeProps}
      aria-describedby={contextBasedProps.ariaDescribedBy}
      aria-errormessage={
        contextBasedProps.status === 'error'
          ? contextBasedProps.ariaErrorMessage
          : undefined
      }
      aria-invalid={
        ariaInvalid ?? (contextBasedProps.status === 'error' ? true : undefined)
      }
      aria-labelledby={contextBasedProps.ariaLabelledBy}
      checked={onChange ? checked : undefined}
      css={styles}
      disabled={contextBasedProps.disabled}
      id={contextBasedProps.id}
      onChange={onChange}
      required={contextBasedProps.required}
      $size={contextBasedProps.size}
      status={contextBasedProps.status}
      title={tooltip}
    />
  );
};
