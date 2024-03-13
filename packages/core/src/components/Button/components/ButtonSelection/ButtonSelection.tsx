import * as React from 'react';

// declarations
import type {
  ICheckAttrs,
  IFieldAttrs,
  GlobalAttrProps,
  IInputAttrs,
} from '../../../../declarations/htmlAttrs';
import type {
  FocusEventAttrProps,
  TriggerEventAttrProps,
} from '../../../../declarations/htmlEventAttrs';
import type { SelectionScheme } from '../../../../declarations/commonProps';
import type {
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../../declarations/styled';

// styled
import { StyledButtonSelection } from './StyledButtonSelection';

export interface ButtonSelectionProps
  extends Pick<GlobalAttrProps, 'id'>,
    Pick<ICheckAttrs, 'checked' | 'defaultChecked'>,
    Pick<IFieldAttrs, 'disabled' | 'name'>,
    Pick<IInputAttrs, 'value'>,
    FocusEventAttrProps,
    TriggerEventAttrProps,
    StyledPolymorphicProps,
    StyledOverloadCssProps {
  /** Label for input (checkbox or radio type) */
  label?: string;
  /** If it's multiple we use a checkbox and if it's single we use a radio */
  selectionScheme?: SelectionScheme;
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
