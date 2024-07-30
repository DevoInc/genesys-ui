import * as React from 'react';

import { StyledSwitchControlInput } from '../styled';
import { InputControlInputProps } from '../../InputControl/components';
import { CheckboxControlProps } from '../../CheckboxControl';

interface SwitchControlInputProps
  extends InputControlInputProps,
    Pick<CheckboxControlProps, 'checked'> {}

export const SwitchControlInput: React.FC<SwitchControlInputProps> = ({
  autoFocus,
  ...restProps
}) => {
  return <StyledSwitchControlInput {...restProps} autoFocus={autoFocus} />;
};
