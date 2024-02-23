import { PanelContainerAttrs, PanelRemoveSpace } from '../../declarations';

export interface PanelFooterAttrs extends PanelContainerAttrs {
  /** Apply the raised surface background color to the footer */
  hasBackground?: boolean;
  /** To remove the spacing in the footer (usually padding) */
  removeSpace?: PanelRemoveSpace;
}
