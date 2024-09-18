import * as React from 'react';

import type {
  IFieldControl,
  ICheckAttrs,
  ICheckAriaAttrs,
  IInputAttrs,
  IWithRequiredAriaLabelOrAriaLabelledByAttr,
} from '../../declarations';
import { FieldContext } from '../Field/context';
import { getFieldContextProps } from '../Field';

import { StyledCheckboxControl } from './StyledCheckboxControl';
import { ICheckboxControl } from './declarations';

interface CommonCheckboxControlProps
  extends IFieldControl,
    ICheckAttrs,
    ICheckAriaAttrs,
    Pick<IInputAttrs, 'value'>,
    ICheckboxControl {}

export type CheckboxControlProps =
  IWithRequiredAriaLabelOrAriaLabelledByAttr<CommonCheckboxControlProps>;

export const CheckboxControl: React.FC<CheckboxControlProps> = ({
  'aria-checked': ariaChecked,
  'aria-describedby': ariaDescribedBy,
  'aria-errormessage': ariaErrorMessage,
  'aria-invalid': ariaInvalid,
  'aria-labelledby': ariaLabelledBy,
  checked,
  disabled,
  id,
  indeterminate,
  onChange,
  required,
  size,
  status,
  style,
  tooltip,
  checkedIcon,
  ...restNativeProps
}) => {
  const fieldContext = React.useContext(FieldContext);
  const contextBasedProps = getFieldContextProps({
    ariaDescribedBy,
    ariaErrorMessage,
    ariaLabelledBy,
    disabled,
    context: fieldContext,
    id,
    required,
    size,
    status,
  });
  return (
    <StyledCheckboxControl
      {...restNativeProps}
      aria-describedby={contextBasedProps.ariaDescribedBy}
      aria-checked={(ariaChecked ?? indeterminate) ? 'mixed' : checked}
      aria-errormessage={
        contextBasedProps.status === 'error'
          ? contextBasedProps.ariaErrorMessage
          : undefined
      }
      aria-invalid={
        ariaInvalid ?? (contextBasedProps.status === 'error' ? true : undefined)
      }
      $checkedIcon={checkedIcon}
      aria-labelledby={contextBasedProps.ariaLabelledBy}
      checked={onChange ? checked : undefined}
      css={style}
      disabled={contextBasedProps.disabled}
      id={contextBasedProps.id}
      $indeterminate={indeterminate}
      onChange={onChange}
      required={contextBasedProps.required}
      $size={contextBasedProps.size}
      $status={contextBasedProps.status}
      title={tooltip}
    />
  );
};
