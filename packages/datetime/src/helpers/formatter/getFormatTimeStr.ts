/**
 * Returns a time string format based on the provided parameters.
 */
export const getFormatTimeStr = (hasSecons = true, hasMillis = false) =>
  `HH:mm${hasSecons || hasMillis ? `:ss${hasMillis ? '.SSS' : ''}` : ''}`;
