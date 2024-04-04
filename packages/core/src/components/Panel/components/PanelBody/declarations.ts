import type { TPanelRemoveSpace } from '../../declarations';

export interface IPanelBodyAttrs {
  /** If the body content has special spacing when it's scrolled to separate the scrollbar from the edge. */
  hasScrollSpacing?: boolean;
  /** To remove the spacing in the body (usually padding) */
  removeSpace?: TPanelRemoveSpace;
}
