import { PanelRemoveSpace } from '../../declarations';

export interface PanelBodyAttrs {
  /** If the body content is scrolled */
  hasScroll?: boolean;
  /** To remove the spacing in the footer (usually padding) */
  removeSpace?: PanelRemoveSpace;
}
