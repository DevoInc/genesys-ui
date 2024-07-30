import * as React from 'react';

import type {
  ISwitch,
  TSwitchDiameter,
  TSwitchHeight,
} from '../../declarations';
import { StyledSwitchControlHandle } from './StyledSwitchControlHandle';

export interface SwitchControlHandleProps
  extends Pick<ISwitch, 'checked' | 'disabled' | 'style'> {
  switchHeight: TSwitchHeight;
  diameter: TSwitchDiameter;
}

export const SwitchControlHandle: React.FC<SwitchControlHandleProps> = ({
  disabled,
  checked,
  switchHeight,
  diameter,
  style,
}) => (
  <StyledSwitchControlHandle
    $disabled={disabled}
    $checked={checked}
    css={style}
    diameter={diameter}
    switchHeight={switchHeight}
  />
);
