export const getRealTimeDataTip = (state) =>
  state === 'inactive' ? 'Activate real-time' : 'Deactivate real-time';

export const getButtonStateFromRealTimeState = (state) => {
  switch (state) {
    case 'inactive':
      return 'enabled';
    case 'selected':
      return 'focused';
    default:
      return state;
  }
};
