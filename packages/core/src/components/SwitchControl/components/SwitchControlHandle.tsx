import * as React from 'react';

import type { StyledOverloadCssProps } from '../../../declarations';
import type { BaseSwitchControlProps } from '../declarations';
import {
  StyledSwitchControlHandle,
  StyledSwitchControlHandleProps,
} from '../styled';

export interface SwitchControlHandleProps
  extends Omit<StyledSwitchControlHandleProps, '$checked' | '$disabled'>,
    Pick<BaseSwitchControlProps, 'checked' | 'disabled'>,
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
