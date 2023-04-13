import * as React from 'react';
import { useTheme } from 'styled-components';

import {
  Box,
  ButtonProps,
  IconButton,
  SpinnerLoader,
} from '@devoinc/genesys-ui';

import { REAL_TIME_SPINNER_SIZE_MAP } from './constants';
import { RealtimeState } from './declarations';

import {
  cssDateTimeRangeControlRTButton,
  cssDateTimeRangeControlRTButtonSpinner,
} from './mixins';

import { getButtonStateFromRealTimeState, getRealTimeDataTip } from './util';

export interface DateTimeRangeControlRTButtonProps
  extends Pick<ButtonProps, 'size' | 'onClick'> {
  /** RealTime button state. */
  state?: RealtimeState;
}

export const DateTimeRangeControlRTButton: React.FC<
  DateTimeRangeControlRTButtonProps
> = ({ onClick, state = 'inactive', size = 'sm' }) => {
  const themeScheme = useTheme().meta.scheme;
  return (
    <Box marginLeft="auto" paddingLeft="cmp-xxs" position="relative">
      {state === 'activated' && (
        <Box position="absolute" zIndex={1} css="pointer-events: none">
          <SpinnerLoader
            colorScheme={themeScheme === 'dark' ? 'lightTrans' : 'darkTrans'}
            css={cssDateTimeRangeControlRTButtonSpinner}
            size={REAL_TIME_SPINNER_SIZE_MAP[size]}
          />
        </Box>
      )}
      <IconButton
        css={cssDateTimeRangeControlRTButton}
        circular={true}
        icon={'real_time'}
        onClick={onClick}
        size={size}
        state={getButtonStateFromRealTimeState(state)}
        title={getRealTimeDataTip(state)}
      />
    </Box>
  );
};
