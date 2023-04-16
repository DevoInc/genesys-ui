import * as React from 'react';

// constants
import { INPUT_CONTROL_ICON_STATUS_MAP } from '../constants';

// declarations
import {
  ContainerEventAttrProps,
  FieldControlCommonProps,
  FieldControlWidth,
  FieldSize,
  InputAttrProps,
  InputEventAttrs,
  TextBoxAriaProps,
} from '../../../declarations';

// utils
import { hasStatus } from '../../../utils/validations';

// styled
import { StyledInputControl, StyledInputControlProps } from '../styled';

export interface InputControlInputProps
  extends FieldControlCommonProps,
    Pick<TextBoxAriaProps, 'aria-invalid' | 'aria-activedescendant'>,
    Omit<InputAttrProps, 'size' | 'multiple'>,
    InputEventAttrs,
    Pick<
      ContainerEventAttrProps,
      'onKeyDown' | 'onKeyUp' | 'onPaste' | 'onWheel'
    >,
    Omit<StyledInputControlProps, 'hasIcon' | 'hasTypeIcon' | '$size'> {
  /** Name of the Icon from icon library font */
  icon?: string;
  /** Predefined width of the input. It should reflect the length of the content you expect the user to enter */
  inputWidth?: FieldControlWidth;
  /** Size of the input: height, padding, font-size... etc. */
  size?: FieldSize;
}

export const InputControlInput: React.FC<InputControlInputProps> = ({
  'aria-errormessage': ariaErrorMessage,
  'aria-invalid': ariaInvalid,
  icon,
  size = 'md',
  status = 'base',
  type = 'text',
  ...restInputNativeProps
}) => {
  const typeIcon = type === 'search' ? 'search_find_zoom' : null;
  const iconEval =
    icon || (hasStatus(status) ? INPUT_CONTROL_ICON_STATUS_MAP[status] : icon);
  return (
    <StyledInputControl
      {...restInputNativeProps}
      aria-errormessage={status === 'error' ? ariaErrorMessage : undefined}
      aria-invalid={ariaInvalid ?? (status === 'error' ? true : undefined)}
      hasIcon={!iconEval}
      hasTypeIcon={Boolean(typeIcon)}
      $size={size}
      status={status}
      type={type}
    />
  );
};
