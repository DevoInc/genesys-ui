import * as React from 'react';

import type {
  IContainerEventAttrs,
  IFieldControl,
  TFieldSize,
  ITextareaAttrs,
  ITextareaEventAttrs,
  ITextBoxAriaAttrs,
  IWithRequiredAriaLabelOrAriaLabelledByAttr,
  TFieldStatus,
} from '../../declarations';
import { FieldContext } from '../Field/context';
import { getFieldContextProps } from '../Field';

import { StyledTextareaControl } from './StyledTextareaControl';

interface CommonTextareaControlProps
  extends IFieldControl,
    Pick<ITextBoxAriaAttrs, 'aria-invalid' | 'aria-activedescendant'>,
    Omit<ITextareaAttrs, 'cols'>,
    ITextareaEventAttrs,
    Pick<
      IContainerEventAttrs<HTMLTextAreaElement>,
      'onKeyDown' | 'onKeyUp' | 'onPaste' | 'onWheel'
    > {
  /** The size for the textarea. It affects to its padding, font-size... etc. */
  size?: TFieldSize;
  status?: TFieldStatus;
}

export type TextareaControlProps =
  IWithRequiredAriaLabelOrAriaLabelledByAttr<CommonTextareaControlProps>;

export const TextareaControl: React.FC<TextareaControlProps> = ({
  'aria-errormessage': ariaErrorMessage,
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  disabled,
  id,
  readOnly,
  required,
  rows = 4,
  size,
  status,
  style,
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
      css={style}
      disabled={contextBasedProps.disabled}
      id={contextBasedProps.id}
      readOnly={readOnly}
      required={contextBasedProps.required}
      rows={rows}
      $size={contextBasedProps.size}
      $status={contextBasedProps.status}
      title={tooltip}
    />
  );
};
