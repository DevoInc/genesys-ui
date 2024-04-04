import * as React from 'react';

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
  content: React.CSSProperties['content'];
  display: React.CSSProperties['display'];
  pos: React.CSSProperties['position'];
}) => `
  content: ${content ?? '""'};
  display: ${display ?? 'block'};
  position: ${pos ?? 'absolute'};
`;
