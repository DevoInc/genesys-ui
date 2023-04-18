import * as React from 'react';

import { ButtonProps, IconButtonProps } from '../';
import { GlobalSize } from '../../declarations';
import { PickUnion } from '../../typeFunctions';

export interface RenderContent {
  append?: React.ReactElement;
  bottom?: React.ReactElement;
  middle?: React.ReactElement;
  prepend?: React.ReactElement;
  top?: React.ReactElement;
}

export interface HeaderSettings {
  actions?: (
    | React.ReactElement<ButtonProps>
    | React.ReactElement<IconButtonProps>
  )[];
  bordered?: boolean;
  renderContent?: RenderContent | React.ReactNode;
  hasShadowStyle?: boolean;
}

export interface FooterSettings {
  actions?: (
    | React.ReactElement<ButtonProps>
    | React.ReactElement<IconButtonProps>
  )[];
  bordered?: boolean;
  renderContent?: RenderContent | React.ReactElement;
  hasBackground?: boolean;
  hasShadowStyle?: boolean;
}

export type PanelSize = PickUnion<GlobalSize, 'xs' | 'sm' | 'md'>;
