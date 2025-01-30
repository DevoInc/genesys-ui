import * as React from 'react';

import type {
  IPanelContainerAttrs,
  TPanelIcon,
  TPanelRemoveSpace,
} from '../../declarations';
import type {
  IGlobalAttrs,
  ILayoutBoxCss,
  IMouseEventAttrs,
} from '../../../../declarations';

export interface IPanelHeaderAttrs extends IPanelContainerAttrs {
  hasSubtitle?: boolean;
  /** To remove the spacing in the header (usually padding) */
  removeSpace?: TPanelRemoveSpace;
  /** Custom content after the heading and before the actions */
  appendContent?: React.ReactNode;
  /** Custom content before the heading */
  prependContent?: React.ReactNode;
  /** Custom content below all the header content */
  bottomContent?: React.ReactNode;
}

export interface IPanelCloseAttrs {
  cssTranslate?: ILayoutBoxCss['cssTranslate'];
  onClick: IMouseEventAttrs['onClick'];
  tooltip?: IGlobalAttrs['tooltip'];
}

export interface IPanelCollapseAttrs {
  expanded?: boolean;
  onClick: IMouseEventAttrs['onClick'];
  tooltip?: IGlobalAttrs['tooltip'];
}

export interface IPanelHeadingAttrs {
  icon?: TPanelIcon;
  legend?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  titleTooltip?: string;
}
