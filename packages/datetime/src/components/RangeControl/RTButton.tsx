import * as React from 'react';

import { ButtonProps, SpinnerLoader } from '@devoinc/genesys-ui';

import { StyledRangeControlRTButton } from './styled';
import { RealtimeState } from './declarations';
import { getButtonStateFromRealTimeState, getRealTimeDataTip } from './util';

export interface RTButtonProps extends Pick<ButtonProps, 'size' | 'onClick'> {
  /** RealTime button state. */
  state?: RealtimeState;
}

export const RTButton: React.FC<RTButtonProps> = ({
  onClick,
  state = 'inactive',
  size = 'md',
}) => (
  <div style={{ position: 'relative' }}>
    {state === 'activated' && (
      <div style={{ position: 'absolute', zIndex: 10 }}>
        <SpinnerLoader colorScheme="darkTrans" />
      </div>
    )}
    <StyledRangeControlRTButton
      circular={true}
      icon={'real_time'}
      onClick={onClick}
      size={size}
      state={getButtonStateFromRealTimeState(state)}
      title={getRealTimeDataTip(state)}
    />
  </div>
);
