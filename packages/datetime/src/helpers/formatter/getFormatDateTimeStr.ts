export const getFormatDateTimeStr = (hasSecons = true, hasMillis = false) =>
  `yyyy-MM-dd HH:mm${hasSecons || hasMillis ? `:ss${hasMillis ? '.SSS' : ''}` : ''}`;
