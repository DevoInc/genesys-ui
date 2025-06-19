/**
 * Get the marker size
 *
 * @param tokens object with the necessary design tokens
 * @param size Button prop
 * @return The size configuration of marker
 */
export const getMarkerSize = ({ tokens, size }) => ({
  fontSize: tokens.typo.fontSize[size],
  offset: tokens.size.offset.enabled[size],
});
