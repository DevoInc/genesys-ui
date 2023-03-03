/**
 * Get the marker size
 *
 * @param props.tokens object with the needed design tokens
 * @param props.size Button prop
 * @return The size configuration of marker
 */
export const getMarkerSize = ({ tokens, size }) => ({
  fontSize: tokens.typo.fontSize[size],
  offset: tokens.size.offset.enabled[size],
  offsetHovered: tokens.size.offset.hovered[size],
});
