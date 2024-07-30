import * as React from 'react';

import { StyledSwitchControlInput } from './StyledSwitchControlInput';
import { InputControlInputProps } from '../../../InputControl/components';
import { CheckboxControlProps } from '../../../CheckboxControl';

interface SwitchControlInputProps
  extends InputControlInputProps,
    Pick<CheckboxControlProps, 'checked'> {}

export const SwitchControlInput: React.FC<SwitchControlInputProps> = ({
  autoFocus,
  ...restProps
}) => <StyledSwitchControlInput {...restProps} autoFocus={autoFocus} />;
