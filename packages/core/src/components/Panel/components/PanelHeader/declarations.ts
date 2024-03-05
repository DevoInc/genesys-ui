import * as React from 'react';
import {
  IPanelContainerAttrs,
  TPanelIcon,
  TPanelRemoveSpace,
} from '../../declarations';
import {
  GlobalAttrProps,
  ILayoutBoxCss,
  MouseEventAttrProps,
} from '../../../../declarations';

export interface IPanelHeaderAttrs extends IPanelContainerAttrs {
  hasSubtitle?: boolean;
  /** To remove the spacing in the header (usually padding) */
  removeSpace?: TPanelRemoveSpace;
}

export interface IPanelCloseAttrs {
  cssTranslate?: ILayoutBoxCss['cssTranslate'];
  onClick: MouseEventAttrProps['onClick'];
  tooltip?: GlobalAttrProps['tooltip'];
}

export interface IPanelCollapseAttrs {
  expanded?: boolean;
  onClick: MouseEventAttrProps['onClick'];
  tooltip?: GlobalAttrProps['tooltip'];
}

export interface IPanelHeadingAttrs {
  icon?: TPanelIcon;
  legend?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  titleTooltip?: string;
}
