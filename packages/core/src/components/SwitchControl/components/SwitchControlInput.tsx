import * as React from 'react';

import { StyledSwitchControlInput } from '../styled';
import { InputControlInputProps } from '../../InputControl/components';
import { CheckboxControlProps } from '../../CheckboxControl';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SwitchControlInputProps
  extends InputControlInputProps,
    Pick<CheckboxControlProps, 'checked'> {}

export const SwitchControlInput: React.FC<SwitchControlInputProps> = ({
  autoFocus,
  ...restProps
}) => {
  return <StyledSwitchControlInput {...restProps} autoFocus={autoFocus} />;
};
