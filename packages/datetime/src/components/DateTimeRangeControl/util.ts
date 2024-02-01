export const getRealTimeDataTip = (state) =>
  state === 'inactive' ? 'Activate real-time' : 'Deactivate real-time';

export const getButtonStateFromRealTimeState = (state) => {
  switch (state) {
  case 'inactive':
    return 'enabled';
  case 'activated':
    return 'selected';
  case 'selected':
    return 'selected';
  default:
    return state;
  }
};
