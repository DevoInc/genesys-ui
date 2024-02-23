import * as React from 'react';

import { ButtonProps, IconButtonProps, PopoverProps } from '../';
import {
  GlobalAttrProps,
  GlobalSize,
  LinkAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../declarations';
import { PickUnion } from '../../typeFunctions';

export type PanelSize = PickUnion<GlobalSize, 'xs' | 'sm' | 'md'>;
export type PanelRemoveSpace = boolean;
export type PanelBordered = boolean;
export type PanelBoxShadow = boolean;
export type PanelChildren = React.ReactNode;
export type PanelActions = (
  | React.ReactElement<ButtonProps>
  | React.ReactElement<IconButtonProps>
  | React.ReactElement<PopoverProps>
)[];
export type PanelIcon = React.ReactNode;

export interface PanelHelpAttrs {
  helpTooltip?: GlobalAttrProps['tooltip'];
  helpUrl?: LinkAttrProps['href'];
}

export interface PanelBaseAttrs
  extends StyledPolymorphicProps,
    StyledOverloadCssProps {}

export interface PanelContainerAttrs {
  /** Apply border at the top of the footer or bottom of the header */
  bordered?: PanelBordered;
  /** Configuration for the header/footer actions */
  actions?: PanelActions;
  /** Apply box-shadow at the top of the footer or bottom of the header */
  hasBoxShadow?: PanelBoxShadow;
  /** Set the size for Panel header/footer components: spacing, size of internals... etc. */
  size?: PanelSize;
  children?: PanelChildren;
}
