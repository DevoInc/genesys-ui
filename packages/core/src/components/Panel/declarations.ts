import * as React from 'react';
import { DOMAttributes } from 'react';

import { ButtonProps, IconButtonProps } from '../';
import { BaseSize } from '../../declarations';

export type PanelActions = (
  | React.ReactElement<ButtonProps>
  | React.ReactElement<IconButtonProps>
)[];

export type PanelHelpUrl = string;
export type PanelHelpTooltip = string;
export type PanelStructuredContent = {
  append?: React.ReactElement;
  bottom?: React.ReactElement;
  middle?: React.ReactElement;
  prepend?: React.ReactElement;
  top?: React.ReactElement;
};

export type PanelBorderSettings = {
  color?: React.CSSProperties['color'];
  width?: React.CSSProperties['borderWidth'];
};

export type PanelCloseSettings = {
  cssTranslate?: string;
  onClick?: DOMAttributes<any>['onClick'];
  tooltip?: string;
};

export type PanelCollapseSettings = {
  expanded?: boolean;
  onClick?: DOMAttributes<any>['onClick'];
  tooltip?: string;
};

export type PanelContentSettings = {
  removeSpace?: boolean;
};

export type PanelFooterSettings = {
  actions?: PanelActions;
  bordered?: boolean;
  renderContent?: PanelStructuredContent | React.ReactElement;
  hasBackground?: boolean;
  hasShadowStyle?: boolean;
};

export type PanelHeaderSettings = {
  actions?: PanelActions;
  bordered?: boolean;
  renderContent?: PanelStructuredContent | React.ReactElement;
  hasShadowStyle?: boolean;
};

export type PanelHasScroll = boolean;

export type PanelHeightScheme = {
  height?: React.CSSProperties['height'];
  minHeight?: React.CSSProperties['minHeight'];
  maxHeight?: React.CSSProperties['maxHeight'];
};

export type PanelSize = BaseSize;

export type PanelWidthScheme = {
  width?: React.CSSProperties['width'];
  minWidth?: React.CSSProperties['minWidth'];
  maxWidth?: React.CSSProperties['maxWidth'];
};
