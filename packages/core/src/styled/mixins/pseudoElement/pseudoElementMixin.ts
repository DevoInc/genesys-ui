/**
 * Get the pseudo-element styles but generate an overlay.
 *
 * @param obj Object with the css values configuration.
 * @return the css width styles.
 */
export const pseudoElementMixin = ({
  content,
  display,
  pos,
}: {
  content: string;
  display: string;
  pos: string;
}) => `
  content: ${content ?? '""'};
  display: ${display ?? 'block'};
  position: ${pos ?? 'absolute'};
`;
