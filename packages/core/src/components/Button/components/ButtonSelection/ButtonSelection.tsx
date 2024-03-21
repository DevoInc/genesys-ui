import * as React from 'react';

// declarations
import type {
  ICheckAttrs,
  IFieldAttrs,
  IGlobalAttrs,
  IInputAttrs,
} from '../../../../declarations/htmlAttrs';
import type {
  IFocusEventAttrs,
  ITriggerEventAttrs,
} from '../../../../declarations/htmlEventAttrs';
import type { TSelectionScheme } from '../../../../declarations/commonProps';
import type {
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations/styled';

// styled
import { StyledButtonSelection } from './StyledButtonSelection';

export interface ButtonSelectionProps
  extends Pick<IGlobalAttrs, 'id'>,
    Pick<ICheckAttrs, 'checked' | 'defaultChecked'>,
    Pick<IFieldAttrs, 'disabled' | 'name'>,
    Pick<IInputAttrs, 'value'>,
    IFocusEventAttrs,
    ITriggerEventAttrs,
    IStyledPolymorphic,
    IStyledOverloadCss {
  /** Label for input (checkbox or radio type) */
  label?: string;
  /** If it's multiple we use a checkbox and if it's single we use a radio */
  selectionScheme?: TSelectionScheme;
}

export const ButtonSelection: React.FC<ButtonSelectionProps> = ({
  as,
  id,
  checked,
  defaultChecked,
  disabled,
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  selectionScheme = 'multiple',
  styles,
  value,
}) => (
  <StyledButtonSelection
    as={as}
    aria-label={label}
    checked={checked}
    css={styles}
    defaultChecked={defaultChecked}
    disabled={disabled}
    id={id ? `${id}-button-input` : null}
    name={name}
    onBlur={onBlur}
    onChange={onChange}
    onFocus={onFocus}
    type={selectionScheme === 'single' ? 'radio' : 'checkbox'}
    value={value}
  />
);
