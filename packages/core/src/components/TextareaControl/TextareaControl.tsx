import * as React from 'react';

// declarations
import {
  ContainerEventAttrProps,
  FieldControlCommonProps,
  FieldSize,
  StyledOverloadCssProps,
  TextareaAttrProps,
  TextareaEventAttrs,
  TextBoxAriaProps,
} from '../../declarations';

// styled
import {
  StyledTextareaControl,
  StyledTextareaControlProps,
} from './StyledTextareaControl';

export interface TextareaControlProps
  extends FieldControlCommonProps,
    StyledOverloadCssProps,
    Pick<TextBoxAriaProps, 'aria-invalid' | 'aria-activedescendant'>,
    Omit<TextareaAttrProps, 'cols'>,
    TextareaEventAttrs,
    Pick<
      ContainerEventAttrProps<HTMLTextAreaElement>,
      'onKeyDown' | 'onKeyUp' | 'onPaste' | 'onWheel'
    >,
    Omit<StyledTextareaControlProps, '$size'> {
  /** The size for the textarea. It affects to its padding, font-size... etc. */
  size?: FieldSize;
}

export const TextareaControl: React.FC<TextareaControlProps> = ({
  'aria-errormessage': ariaErrorMessage,
  'aria-invalid': ariaInvalid,
  rows = 4,
  size = 'md',
  status = 'base',
  styles,
  ...restNativeProps
}) => (
  <StyledTextareaControl
    {...restNativeProps}
    aria-errormessage={status === 'error' ? ariaErrorMessage : undefined}
    aria-invalid={ariaInvalid ?? (status === 'error' ? true : undefined)}
    rows={rows}
    $size={size}
    status={status}
    css={styles}
  />
);
