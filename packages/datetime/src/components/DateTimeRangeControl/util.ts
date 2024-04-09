import type { IconButtonProps } from '@devoinc/genesys-ui';
import type { TRealtimeState } from './declarations';

export const getRealTimeDataTip = (state) =>
  state === 'inactive' ? 'Activate real-time' : 'Deactivate real-time';

export const getButtonStateFromRealTimeState = (
  state: TRealtimeState = 'inactive',
): IconButtonProps['state'] => {
  switch (state) {
    case 'disabled':
      return 'disabled';
    case 'inactive':
      return 'enabled';
    case 'activated':
      return 'selected';
    case 'selected':
      return 'selected';
    default:
      return 'enabled';
  }
};
