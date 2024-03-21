import * as React from 'react';

import type {
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../declarations/styled';
import type { TGlobalSize } from '../../declarations/commonProps';
import type { IGlobalAttrs, ILinkAttrs } from '../../declarations/htmlAttrs';
import { PickUnion } from '../../typeFunctions';

export type TPanelSize = PickUnion<TGlobalSize, 'xs' | 'sm' | 'md'>;
export type TPanelRemoveSpace = boolean;
export type TPanelBordered = boolean;
export type TPanelBoxShadow = boolean;
export type TPanelChildren = React.ReactNode;
export type TPanelActions = React.ReactElement[];
export type TPanelIcon = React.ReactNode;

export interface IPanelHelpAttrs {
  helpTooltip?: IGlobalAttrs['tooltip'];
  helpUrl?: ILinkAttrs['href'];
}

export interface IPanelBaseAttrs
  extends IStyledPolymorphic,
    IStyledOverloadCss {}

export interface IPanelContainerAttrs {
  /** Apply border at the top of the footer or bottom of the header */
  bordered?: TPanelBordered;
  /** Configuration for the header/footer actions */
  actions?: TPanelActions;
  /** Apply box-shadow at the top of the footer or bottom of the header */
  hasBoxShadow?: TPanelBoxShadow;
  /** Set the size for Panel header/footer components: spacing, size of internals... etc. */
  size?: TPanelSize;
  children?: TPanelChildren;
}
