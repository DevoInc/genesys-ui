import * as React from 'react';
import {
  PanelContainerAttrs,
  PanelIcon,
  PanelRemoveSpace,
} from '../../declarations';
import {
  GlobalAttrProps,
  ILayoutBoxCss,
  MouseEventAttrProps,
} from '../../../../declarations';

export interface PanelHeaderAttrs extends PanelContainerAttrs {
  hasSubtitle?: boolean;
  /** To remove the spacing in the header (usually padding) */
  removeSpace?: PanelRemoveSpace;
}

export interface PanelCloseAttrs {
  cssTranslate?: ILayoutBoxCss['cssTranslate'];
  onClick: MouseEventAttrProps['onClick'];
  tooltip?: GlobalAttrProps['tooltip'];
}

export interface PanelCollapseAttrs {
  expanded?: boolean;
  onClick: MouseEventAttrProps['onClick'];
  tooltip?: GlobalAttrProps['tooltip'];
}

export interface PanelHeadingAttrs {
  icon?: PanelIcon;
  legend?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  titleTooltip?: string;
}
