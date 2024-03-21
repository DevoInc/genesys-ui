import * as React from 'react';

import type { ISwitch, TSwitchDiameter, TSwitchHeight } from '../declarations';
import { StyledSwitchControlHandle } from '../styled';

export interface SwitchControlHandleProps
  extends Pick<ISwitch, 'checked' | 'disabled' | 'styles'> {
  switchHeight: TSwitchHeight;
  diameter: TSwitchDiameter;
}

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
