import * as React from 'react';
import { useTheme } from 'styled-components';

import {
  Box,
  IconButton,
  IconButtonProps,
  SpinnerLoader,
} from '@devoinc/genesys-ui';

import { REAL_TIME_SPINNER_SIZE_MAP } from './constants';
import { RealtimeState } from '../DateTimeRangeControl/declarations';

import { cssRealTimeButton, cssRealTimeButtonSpinner } from './helpers';

import {
  getButtonStateFromRealTimeState,
  getRealTimeDataTip,
} from '../DateTimeRangeControl/util';
import { concat } from 'lodash';

export interface RealTimeButtonProps
  extends Omit<
    IconButtonProps,
    'colorScheme' | 'icon' | 'circular' | 'state' | 'wide'
  > {
  state?: RealtimeState;
}

export const RealTimeButton: React.FC<RealTimeButtonProps> = ({
  onClick,
  state = 'inactive',
  styles,
  size = 'sm',
  tooltip,
  ...restIconButtonProps
}) => {
  const themeScheme = useTheme().meta.scheme;
  return (
    <Box marginLeft="auto" paddingLeft="cmp-xxs" position="relative">
      {state === 'activated' && (
        <Box position="absolute" zIndex={1} css="pointer-events: none">
          <SpinnerLoader
            colorScheme={themeScheme === 'dark' ? 'lightTrans' : 'darkTrans'}
            css={cssRealTimeButtonSpinner}
            size={REAL_TIME_SPINNER_SIZE_MAP[size]}
          />
        </Box>
      )}
      <IconButton
        {...restIconButtonProps}
        css={concat(cssRealTimeButton, styles)}
        circular={true}
        icon={'gi-real_time'}
        onClick={onClick}
        size={size}
        state={getButtonStateFromRealTimeState(state)}
        tooltip={tooltip || getRealTimeDataTip(state)}
      />
    </Box>
  );
};
