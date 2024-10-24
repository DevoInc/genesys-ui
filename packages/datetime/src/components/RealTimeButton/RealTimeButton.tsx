import * as React from 'react';
import { useTheme } from 'styled-components';
import { GIRealTime } from '@devoinc/genesys-icons';

import {
  Box,
  getPxFromRem,
  IconButton,
  type IconButtonProps,
  SpinnerLoader,
} from '@devoinc/genesys-ui';

import type { TRealtimeState } from './declarations';
import {
  cssRealTimeButtonSpinner,
  getButtonStateFromRealTimeState,
  getRealTimeDataTip,
} from './helpers';

export interface RealTimeButtonProps
  extends Omit<
    IconButtonProps,
    'colorScheme' | 'icon' | 'circular' | 'state' | 'wide'
  > {
  state?: TRealtimeState;
  quiet?: boolean;
}

export const RealTimeButton: React.FC<RealTimeButtonProps> = ({
  onClick,
  quiet,
  state = 'inactive',
  size = 'sm',
  tooltip,
  ...restIconButtonProps
}) => {
  const theme = useTheme();
  const themeScheme = theme.meta.scheme;
  const iconSize = getPxFromRem(theme.cmp.dateRange.realTimeIcon.typo[size]);

  return (
    <Box
      marginLeft="auto"
      paddingLeft="cmp-xxs"
      position="relative"
      visibility={state === 'hidden' ? 'hidden' : undefined}
    >
      {state === 'activated' && (
        <Box position="absolute" zIndex={1} style="pointer-events: none">
          <SpinnerLoader
            colorScheme={themeScheme === 'dark' ? 'lightTrans' : 'darkTrans'}
            style={cssRealTimeButtonSpinner}
            size={size}
          />
        </Box>
      )}
      <IconButton
        {...restIconButtonProps}
        circular
        colorScheme={quiet ? 'quiet' : 'neutral'}
        onClick={onClick}
        size={size}
        state={getButtonStateFromRealTimeState(state)}
        tooltip={tooltip || getRealTimeDataTip(state)}
      >
        <GIRealTime size={iconSize} />
      </IconButton>
    </Box>
  );
};
