import * as React from 'react';

import type { IStyleAttr, IStyledPolymorphic } from '../../declarations/styled';
import type {
  IClassName,
  IGlobalAttrs,
  ILinkAttrs,
} from '../../declarations/htmlAttrs';
import type { FlexProps } from '../Flex';

export type TPanelSize = 'xs' | 'sm' | 'md';
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
    IStyleAttr,
    IClassName {}

export interface IPanelSpaceAttrs
  extends Pick<
    FlexProps,
    'padding' | 'paddingLeft' | 'paddingBottom' | 'paddingRight' | 'paddingTop'
  > {}

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
