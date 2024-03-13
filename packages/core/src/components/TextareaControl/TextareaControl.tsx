import * as React from 'react';

import type {
  ContainerEventAttrProps,
  IFieldControl,
  TFieldSize,
  TextareaAttrProps,
  TextareaEventAttrs,
  TextBoxAriaProps,
  WithRequiredAriaLabelOrAriaLabelledByProps,
} from '../../declarations';
import { FieldContext } from '../Field/context';
import { getFieldContextProps } from '../Field';

import {
  StyledTextareaControl,
  StyledTextareaControlProps,
} from './StyledTextareaControl';

interface CommonTextareaControlProps
  extends IFieldControl,
    Pick<TextBoxAriaProps, 'aria-invalid' | 'aria-activedescendant'>,
    Omit<TextareaAttrProps, 'cols'>,
    TextareaEventAttrs,
    Pick<
      ContainerEventAttrProps<HTMLTextAreaElement>,
      'onKeyDown' | 'onKeyUp' | 'onPaste' | 'onWheel'
    >,
    Omit<StyledTextareaControlProps, '$size'> {
  /** The size for the textarea. It affects to its padding, font-size... etc. */
  size?: TFieldSize;
}

export type TextareaControlProps =
  WithRequiredAriaLabelOrAriaLabelledByProps<CommonTextareaControlProps>;

export const TextareaControl: React.FC<TextareaControlProps> = ({
  'aria-errormessage': ariaErrorMessage,
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  disabled,
  id,
  required,
  rows = 4,
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
    <StyledTextareaControl
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
      aria-label={ariaLabel}
      aria-labelledby={contextBasedProps.ariaLabelledBy}
      css={styles}
      disabled={contextBasedProps.disabled}
      id={contextBasedProps.id}
      required={contextBasedProps.required}
      rows={rows}
      $size={contextBasedProps.size}
      status={contextBasedProps.status}
      title={tooltip}
    />
  );
};
