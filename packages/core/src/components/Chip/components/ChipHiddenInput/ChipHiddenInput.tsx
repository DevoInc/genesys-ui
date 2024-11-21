import * as React from 'react';

import type { IGlobalAriaAttrs } from '../../../../declarations/ariaAttrs';
import type {
  IButtonAttrs,
  IGlobalAttrs,
  IInputAttrs,
} from '../../../../declarations/htmlAttrs';
import type { TSelectionScheme } from '../../../../declarations/commonProps';
import type {
  IFieldEventAttrs,
  IFocusEventAttrs,
} from '../../../../declarations/htmlEventAttrs';
import type { IStyledOverloadCss } from '../../../../declarations/styled';
import type { ChipContainerProps } from '../ChipContainer/ChipContainer';
import { StyledHiddenInput } from '../../../../styled';

export interface ChipHiddenInputProps
  extends Pick<ChipContainerProps, 'state'>,
    Pick<IGlobalAriaAttrs, 'aria-label'>,
    Pick<IGlobalAttrs, 'id'>,
    Pick<IButtonAttrs, 'name'>,
    IFocusEventAttrs,
    IFieldEventAttrs,
    Pick<IInputAttrs, 'value'>,
    IStyledOverloadCss {
  /** It's equivalent to the native defaultChecked prop, and it has to be used
   * only in uncontrolled mode.*/
  defaultSelected?: boolean;
  disabled?: boolean;
  /** If it's multiple the selection behavior is as a checkbox and if it's
   * single as a radio */
  selectionScheme?: TSelectionScheme;
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
}) =>
  state !== 'readonly' ? (
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
  ) : null;
