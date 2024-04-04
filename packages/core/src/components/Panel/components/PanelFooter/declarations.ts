import type {
  IPanelContainerAttrs,
  TPanelRemoveSpace,
} from '../../declarations';

export interface IPanelFooterAttrs extends IPanelContainerAttrs {
  /** Apply the raised surface background color to the footer */
  hasBackground?: boolean;
  /** To remove the spacing in the footer (usually padding) */
  removeSpace?: TPanelRemoveSpace;
}
