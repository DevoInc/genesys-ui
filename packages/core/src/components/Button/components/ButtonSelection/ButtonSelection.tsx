import * as React from 'react';

// declarations
import {
  CheckAttrProps,
  FieldAttrProps,
  FocusEventAttrProps,
  GlobalAttrProps,
  InputAttrProps,
  SelectionScheme,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
  TriggerEventAttrProps,
} from '../../../../';

// styled
import { StyledButtonSelection } from './StyledButtonSelection';

export interface ButtonSelectionProps
  extends Pick<GlobalAttrProps, 'id'>,
    Pick<CheckAttrProps, 'checked' | 'defaultChecked'>,
    Pick<FieldAttrProps, 'disabled' | 'name'>,
    Pick<InputAttrProps, 'value'>,
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
