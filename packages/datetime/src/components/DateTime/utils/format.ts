export const getFormatTimeStr = (hasSeconds = true, hasMillis = false) =>
  hasSeconds ? (hasMillis ? 'HH:mm:ss.sss' : 'HH:mm:ss') : 'HH:mm';
