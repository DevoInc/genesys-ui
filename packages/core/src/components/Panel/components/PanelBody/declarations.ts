import { TPanelRemoveSpace } from '../../declarations';

export interface IPanelBodyAttrs {
  /** If the body content is scrolled */
  hasScroll?: boolean;
  /** To remove the spacing in the footer (usually padding) */
  removeSpace?: TPanelRemoveSpace;
}
