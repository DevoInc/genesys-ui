import * as React from 'react';

// declarations
import type { GlobalAriaProps } from '../../../declarations/ariaAttrs';
import type {
  ButtonAttrProps,
  GlobalAttrProps,
  InputAttrProps,
} from '../../../declarations/htmlAttrs';
import type { SelectionScheme } from '../../../declarations/commonProps';
import type {
  FieldEventAttrProps,
  FocusEventAttrProps,
} from '../../../declarations/htmlEventAttrs';
import type { StyledOverloadCssProps } from '../../../declarations/styled';
import type { ChipContainerProps } from './ChipContainer';

// styled
import { StyledHiddenInput } from '../../../styled';

export interface ChipHiddenInputProps
  extends Pick<ChipContainerProps, 'state'>,
    Pick<GlobalAriaProps, 'aria-label'>,
    Pick<GlobalAttrProps, 'id'>,
    Pick<ButtonAttrProps, 'name'>,
    FocusEventAttrProps,
    FieldEventAttrProps,
    Pick<InputAttrProps, 'value'>,
    StyledOverloadCssProps {
  /** It's equivalent to the native defaultChecked prop, and it has to be used only in uncontrolled mode.*/
  defaultSelected?: boolean;
  disabled?: boolean;
  /** If it's multiple the selection behavior is as a checkbox and if it's single as a radio */
  selectionScheme?: SelectionScheme;
}

export const ChipHiddenInput: React.FC<ChipHiddenInputProps> = ({
  'aria-label': ariaLabel,
  defaultSelected,
  disabled,
  id,
  name,
  onBlur,
  onChange,
  onFocus,
  selectionScheme,
  state,
  value,
}) => {
  return (
    <StyledHiddenInput
      aria-label={ariaLabel}
      checked={onChange ? state === 'selected' : null}
      defaultChecked={defaultSelected}
      disabled={disabled}
      id={id}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      selectionScheme={selectionScheme}
      value={value}
    />
  );
};
