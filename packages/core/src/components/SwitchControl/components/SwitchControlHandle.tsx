import * as React from 'react';

import {
  StyledSwitchControlHandle,
  StyledSwitchControlHandleProps,
} from '../styled';
import { SwitchControlProps } from '../SwitchControl';
import { StyledOverloadCssProps } from '../../../declarations';

export interface SwitchControlHandleProps
  extends Omit<StyledSwitchControlHandleProps, '$checked' | '$disabled'>,
    Pick<SwitchControlProps, 'checked' | 'disabled'>,
    StyledOverloadCssProps {}

export const SwitchControlHandle: React.FC<SwitchControlHandleProps> = ({
  disabled,
  checked,
  switchHeight,
  diameter,
  styles,
}) => {
  return (
    <StyledSwitchControlHandle
      $disabled={disabled}
      $checked={checked}
      css={styles}
      diameter={diameter}
      switchHeight={switchHeight}
    />
  );
};
